import React from "react";

const SocialIconLinks = (props) => {
    return (
        <a
            class='btn btn-outline-light btn-floating m-1'
            href={props.href}
            role='button'
            target="_blank"
        >
            <i class={props.icon}></i>
        </a>
    );
};

export default SocialIconLinks;
