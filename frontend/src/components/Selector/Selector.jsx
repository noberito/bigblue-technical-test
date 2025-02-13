import * as React from "react";
import "../../index.css";

const Selector = (props) => {

    const categories = [...new Set(props.products.map(product => product.category))]

    return (
        <div className="card m-4 w-50 pb-4">
            <h1 className="card-header bigblue_bold_font">Categories</h1>
            {categories.map(category => (
                <div>
                    <button
                        onClick={() => props.setSelectedCategory(category)}
                        className="btn btn-primary bigblue_font"
                    >
                        {category}
                    </button>
                </div>
            )
            )}
        </div>
    );
}

export { Selector };