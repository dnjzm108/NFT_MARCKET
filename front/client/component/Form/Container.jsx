import styled from 'styled-components'

export const Container = styled.div`
&{
    width: 720px;
    height: 95vh;
    padding: 30px;
    box-sizing:border-box;
    background-color: #fff;
    box-shadow: 0 4px 8px rgb(0 0 0 / 8%);
    border-radius: 16px;
    position: absolute;
    margin: 5vh auto;
    overflow-y: scroll;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align:center;
    /* -ms-overflow-style: none;
    scrollbar-width: none;  */
}
&::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
`