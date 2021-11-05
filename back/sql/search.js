// 카테고리 대분류
const big_cate_sql = () =>{
    return`select * from bigcategory`
}

// 카테고리 중분류
//필요값 대분류 코드
const middle_cate_sql = (e) =>{
    return`select * from middlecategory where big_code = "${e}"`
}

//대분류 아이템
//필요값 대분류 코드
const big_item_sql = (e) =>{
    return(`
    select * from product_detail as A
    LEFT JOIN product as B
    on A.product_no = B.product_no
    LEFT JOIN img as C
    on B.product_no = C.product_no
    WHERE A.product_no LIKE '${e}%'
     GROUP BY C.product_no ORDER BY A.id DESC


select 
A.product_no,A.price,A.rest,B.name,B.creater,B.date,C.img,COUNT(D.nickname) as love
 from product_detail as A
LEFT JOIN product as B
on A.product_no = B.product_no
LEFT JOIN img as C
on B.product_no = C.product_no
LEFT JOIN p_like as D
on B.product_no = D.product_no
GROUP BY C.product_no ORDER BY A.id DESC
;
     `
     )
}


//중분류 아이템
//필요값 중분류 코드
const  middle_item_sql = (e) =>{
    return(` select * from product_detail as A
    LEFT JOIN product as B
    on A.product_no = B.product_no
    LEFT JOIN img as C
    on B.product_no = C.product_no
    WHERE A.product_no LIKE '__${e}%'
     GROUP BY C.product_no ORDER BY A.id DESC`
    )
}

