import { Component, Fragment } from "react";
import { Link } from "react-router-dom";


const ShopCartList = [
    {
        imgUrl: 'assets/images/shop/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        quantity: 'International UG fees in Irish universities',
        totalPrice: ' €9,000 – €25,000+ depending on program and university.',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: 'assets/images/shop/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'PUBLIC UNIVERSTIES',
        quantity: 'Postgraduate / master’s program',
        totalPrice: 'depending on subject area, €9,000 – €30,000+',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    }
]


const TableNineThree = () => {
    return (
        <Fragment>
            <div className="shop-cart" style={{ paddingTop: '30px' }}>
                <div className="container">
                    <div className="section-wrapper">
                        <h4>How much will it cost to study in the Ireland?</h4>
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

export default TableNineThree;