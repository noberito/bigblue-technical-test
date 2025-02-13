import * as React from "react";
import "../../index.css";

const Selector = (props) => {

    const categories = [...new Set(props.products.map(product => product.category))]

    return (
        <div className="m-4 w-50 pb-4">
            <h1 className="bigblue_bold_font">Categories</h1>
            <div className="d-flex flex-column gap-2">
                {categories.map(category => (
                <button
                    key={category}
                    onClick={() =>
                    props.selectedCategory === category
                        ? props.setSelectedCategory(null)
                        : props.setSelectedCategory(category)
                    }
                    className="btn btn-primary bigblue_font w-100"
                >
                    {category}
                </button>
                ))}
            </div>
            </div>

    );
}

export { Selector };