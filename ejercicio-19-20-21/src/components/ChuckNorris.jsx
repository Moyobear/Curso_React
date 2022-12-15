import React, { useState } from "react";
import { getRandomJoke } from "../utils/axiosServices";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Card, Button } from "@mui/material/";

const ChuckNorris = () => {
    const [joke, setJoke] = useState();
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    function getJoke() {
        getRandomJoke()
            .then((response) => {
                if (response.status === 200) {
                    setJoke(response.data);
                }
            })
            .catch((error) => alert(`Algo salió mal con la petición ${error}`));
    }

    function counterLike() {
        setLike(like + 1);
        getJoke();
    }

    function counterDislike() {
        setDislike(dislike + 1);
        getJoke();
    }

    return (
        <div>
            <h1>Bienvenidos a la pagina de chistes de Chuck Norris</h1>
            {joke ? (
                <div>
                    <h4>Me gustan: {like}</h4>
                    <h4>No me gustan: {dislike}</h4>
                    <Card
                        sx={{
                            margin: "auto",
                            width: 400,
                            height: 300,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            boxShadow: 1,
                            borderRadius: 2,
                        }}
                    >
                        {/* <img src={joke.icon_url} alt="Imagen de Chuck Norris" /> */}
                        {joke.value}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                gap: "1rem",
                                marginTop: "1rem",
                            }}
                        >
                            <div>
                                <ThumbUpIcon
                                    color="success"
                                    onClick={counterLike}
                                />
                            </div>
                            <div>
                                <ThumbDownIcon
                                    color="error"
                                    onClick={counterDislike}
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            ) : (
                <Button onClick={getJoke}>
                    Quiero un chiste de Chuck por favor...
                </Button>
            )}
        </div>
    );
};

export default ChuckNorris;
