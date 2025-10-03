import { Component, Fragment } from "react";
import { Link } from "react-router-dom";


const ShopCartList = [
    {
        imgUrl: 'assets/images/shop/01.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        quantity: 'Fall Term',
        totalPrice: 'From August to December',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: 'assets/images/shop/02.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        quantity: 'Spring Term',
        totalPrice: 'From January to April',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: 'assets/images/shop/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        quantity: 'Summer Term',
        totalPrice: 'From May to August',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    }
]


const TableTwoOne = () => {
    return (
        <Fragment>
            <div className="shop-cart" style={{ paddingTop: '30px' }}>
                <div className="container">
                    <div className="section-wrapper">
                        <h3>Study In Canada</h3>
                        <h4>Know all about the intakes available in the Canada</h4>
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="cat-quantity">Quantity</th>
                                        <th className="cat-toprice" style={{ textAlign: 'left' }}>Total</th>
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
                        <p><b><i>Note: Intakes vary basis institution and your program.</i></b></p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default TableTwoOne;