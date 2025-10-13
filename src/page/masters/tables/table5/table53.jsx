import { Component, Fragment } from "react";
import { Link } from "react-router-dom";


const ShopCartList = [
    {
        imgUrl: 'assets/images/shop/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        quantity: 'Private Universities / Specialized Programs Undergraduate (UG)',
        totalPrice: '€100 - €350/semester',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: 'assets/images/shop/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        quantity: 'In some states (ex: Baden-Württemberg, Bavaria)',
        totalPrice: '€1,500/semester',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: 'assets/images/shop/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        quantity: 'Postgraduate (PG / Master\'s)',
        totalPrice: '€100 - €350/semester',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: 'assets/images/shop/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        quantity: 'Private universities or specialized programs (MBA, business, etc.)',
        totalPrice: '€10,000 - €20,000+ per year',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    }
]


const TableFiveThree = () => {
    return (
        <Fragment>
            <div className="shop-cart" style={{ paddingTop: '30px' }}>
                <div className="container">
                    <div className="section-wrapper">
                        <h4>How much will it cost to study in the Germany?</h4>
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

export default TableFiveThree;