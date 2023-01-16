import React from "react";
import Main from "../../components/Products/Main/Main";
import styles from "./Products.module.scss";
const AllProducts = React.lazy(() =>
    import("../../components/Products/AllProducts/AllProducts")
);

const Products = () => {
    return (
        <>
            <div className={styles.Products}>
                <div className={styles.centerContent}>
                    <Main />
                    <AllProducts />
                </div>
            </div>
        </>
    );
};

export default Products;
