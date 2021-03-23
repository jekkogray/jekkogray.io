import React, { Component } from "react";
import Image from "../img/blobs_cover-1.jpg"

function Post() {
    return (
        <div className="post">
            <h3>Commission</h3>
            <p className="post-date">March 22, 2021</p>
            <div className="post-image">
                <img src={Image} alt="Self portrait"></img>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam eveniet quisquam rerum maxime nemo, hic rem accusantium
                tempore molestiae laudantium ipsam nisi saepe quae, natus,
                architecto iure sequi soluta pariatur.
            </p>
            <br />
            <p>
                <a>read more...</a>
            </p>
        </div>
    );
}

export default Post;
