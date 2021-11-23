const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const { query, execute } = require("../../pool")
const { uploadProfile } = require("../../s3")
const { join_sql, login_sql, name_check_sql, admin_login, check_seller_sql, change_status, seller_info_sql, apply_seller, login_info_sql, update_profile_sql } = require("../../sql/user")
const { successData, error403, errorData } = require("../../returnData");
const { createHash } = require('../../auth')

let join = async (req, res) => {
    let { nickname, wallet, email, picture } = req.body
    let { file } = req;
    let params = [nickname, wallet, email]
    if (file !== undefined) {
        const image = await uploadProfile(file, nickname)
        await unlinkFile(file.path)
        params.push(image.Location)
    } else {
        params.push('null')
    }
    try {
        const result = await execute(join_sql(), params)
        let user_info = {
            nickname, wallet, email, picture, status: 0, auth: createHash(nickname)
        }

        res.json(successData(user_info))

    } catch (e) {
        console.log(e);
    }


}

let login = async (req, res) => {

    let { wallet } = req.body
    if (wallet == undefined) {
        res.json(error403())
        return;
    }
    let params = [wallet]
    const [result] = await execute(login_sql(), params)
    if (result !== undefined) {
        let info = {
            nickname: result.nickname,
            wallet: result.wallet,
            email: result.email,
            picture: result.picture,
            status: result.status,
            auth: createHash(result.nickname)
        }
        res.json(successData(info))

    } else {
        res.json(false)
    }

}

let name_check = async (req, res) => {
    let { name } = req.body
    let params = [name]
    if (name !== '') {
        const [result] = await execute(name_check_sql(), params)
        if (result !== undefined) {
            res.json(successData(false))
        } else {
            res.json(successData(true))
        }
    } else {
        return res.json(error403())
    }
}

let admin = async (req, res) => {
    let { id, pw } = req.body;
    let params = [id, pw]
    const [result] = await execute(admin_login(), params)
    if (result !== undefined) {
        res.json(successData(true))
    } else {
        res.json(successData(false))
    }
}

let checkseller = async (req, res) => {
    let { data } = req.body

    let params = [data]
    const result = await execute(check_seller_sql(), params)
    res.json(successData(result))

}

let chageseller = async (req, res) => {
    let { status, nickname } = req.body
    let params = [status, nickname]
    const result = await execute(change_status(), params)

    res.json(successData(result))
}

let applyseller = async (req, res) => {
    let { nickname, seller_no } = req.body
    if (nickname && seller_no == undefined) {
        res.json(errorData('0', '요청하신 값이 잘못되었습니다.'))
    } else {
        try {
            let apply_params = [nickname, seller_no]
            let chage_params = [2, nickname]
            const apply = await execute(apply_seller(), apply_params)
            const change = await execute(change_status(), chage_params)

            let info_params = [nickname]
            const [info] = await execute(login_info_sql(), info_params)
            let update = {
                nickname: info.nickname,
                wallet: info.wallet,
                email: info.email,
                picture: info.picture,
                status: info.status,
                auth: createHash(info.nickname)
            }
            res.json(successData(update))

        } catch {
            res.json(errorData('0', '요청하신 값이 잘못되었습니다.'))
        }
    }
}

let update_profile = async (req, res) => {
    let { nickname, picture, email } = req.body
    let { file } = req;

    let params = [email]
    if (file !== undefined) {
        const image = await uploadProfile(file, nickname)
        await unlinkFile(file.path)
        params.push(image.Location)
        params.push(nickname)
    } else {
        params.push(picture)
        params.push(nickname)
    }
    try {
        const result = await execute(update_profile_sql(), params)

        let info_params = [nickname]
        const [info] = await execute(login_info_sql(), info_params)
        if (info !== undefined) {
            let user_info = {
                nickname: info.nickname,
                wallet: info.wallet,
                email: info.email,
                picture: info.picture,
                status: info.status,
                auth: createHash(info.nickname)
            }
            res.json(successData(user_info))
        }
    }catch{
        res.json(errorData('0', '요청하신 값이 잘못되었습니다.'))
    }

    }
module.exports = {
    join,
    login,
    name_check,
    admin,
    checkseller,
    chageseller,
    applyseller,
    update_profile
}