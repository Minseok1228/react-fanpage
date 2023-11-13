import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { useState } from "react";

const Router = () => {
    const initialState = [
        {
            id: '1',
            writedto: "새우살",
            nickName: "가장동",
            comment: "새우 겁나 마시써요",
            avatar:
                "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjNfNDkg%2FMDAxNjkyNzQ0MjAzOTYz.hc-L2xJN3DeY_wDIqjTg4fPHyZb-3ugY1aL2fZzly6Ig.9KMWcgy0IAtyllHZhbenp4DzPwwqWJ2_i4l2xgQkkRAg.JPEG.dst02030%2F20230822%25A3%25DF171522.jpg&type=sc960_832",
        },
        {
            id: '2',
            writedto: "살치살",
            nickName: "나장동",
            comment: "살치 엄청 마시써요",
            avatar:
                //  URL(
                "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjNfNDkg%2FMDAxNjkyNzQ0MjAzOTYz.hc-L2xJN3DeY_wDIqjTg4fPHyZb-3ugY1aL2fZzly6Ig.9KMWcgy0IAtyllHZhbenp4DzPwwqWJ2_i4l2xgQkkRAg.JPEG.dst02030%2F20230822%25A3%25DF171522.jpg&type=sc960_832",
        },

        {
            id: '3',
            writedto: "부채살",
            nickName: "다장동",
            comment: "부채 마시써요",
            avatar:
                "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjNfNDkg%2FMDAxNjkyNzQ0MjAzOTYz.hc-L2xJN3DeY_wDIqjTg4fPHyZb-3ugY1aL2fZzly6Ig.9KMWcgy0IAtyllHZhbenp4DzPwwqWJ2_i4l2xgQkkRAg.JPEG.dst02030%2F20230822%25A3%25DF171522.jpg&type=sc960_832",
        },
        {
            id: '4',
            writedto: "안심",
            nickName: "라장동",
            comment: "안심 부드러워요",
            avatar:
                "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjNfNDkg%2FMDAxNjkyNzQ0MjAzOTYz.hc-L2xJN3DeY_wDIqjTg4fPHyZb-3ugY1aL2fZzly6Ig.9KMWcgy0IAtyllHZhbenp4DzPwwqWJ2_i4l2xgQkkRAg.JPEG.dst02030%2F20230822%25A3%25DF171522.jpg&type=sc960_832",
        },
        {
            id: '5',
            writedto: "채끝",
            nickName: "마장동",
            comment: "채끝 스테이크",
            avatar:
                "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjNfNDkg%2FMDAxNjkyNzQ0MjAzOTYz.hc-L2xJN3DeY_wDIqjTg4fPHyZb-3ugY1aL2fZzly6Ig.9KMWcgy0IAtyllHZhbenp4DzPwwqWJ2_i4l2xgQkkRAg.JPEG.dst02030%2F20230822%25A3%25DF171522.jpg&type=sc960_832",
        },
    ];
    const [fanletters, setFanletters] = useState(initialState);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home fanletters={fanletters} setFanletters={setFanletters} />} />
                <Route path="detail/:id" element={<Detail fanletters={fanletters} setFanletters={setFanletters} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router