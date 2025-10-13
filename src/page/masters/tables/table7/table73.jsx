import { Component, Fragment } from "react";
import { Link } from "react-router-dom";


const ShopCartList = [
    {
        imgUrl: 'assets/images/shop/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        quantity: 'PUBLIC UNIVERSITIES',
        totalPrice: '€900 - €4,000 / year for many public undergraduate programs',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: 'assets/images/shop/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'PUBLIC UNIVERSTIES',
        quantity: 'PUBLIC UNIVERSTIES',
        totalPrice: '€1,000 ‑ €5,000 / year for many Master’s public programs.',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: 'assets/images/shop/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        quantity: 'PRIVATE UNIVERSITIES',
        totalPrice: '€6,000 ‑ €20,000 / year for many private UG programs.',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: 'assets/images/shop/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'PRIVATE UNIVERSITIES',
        quantity: 'Private universities or specialized programs (MBA, business, etc.)',
        totalPrice: '~ €8,000 ‑ €25,000+ / year for private Master’s / business / specialized programs.',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    }
]


const TableSixThree = () => {
    return (
        <Fragment>
            <div className="shop-cart" style={{ paddingTop: '30px' }}>
                <div className="container">
                    <div className="section-wrapper">
                        <h4>How much will it cost to study in the Italy?</h4>
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="cat-quantity">School</th>
                                        <th className="cat-toprice" style={{ textAlign: 'left' }}>Tuition fees in Canadian Dollar (indicative)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ShopCartList.map((val, i) => (
                                        <tr key={i}>
                                            <td className="cat-quantity">
                                                <h6>{val.quantity}</h6>
                                            </td>
                                            <td className="cat-toprice" style={{ textAlign: 'left' }}>{val.totalPrice}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default TableSixThree;