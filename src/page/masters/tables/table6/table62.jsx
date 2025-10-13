import { Component, Fragment } from "react";
import { Link } from "react-router-dom";


const ShopCartList = [
    {
        imgUrl: 'assets/images/shop/01.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        quantity: 'F-1 Student Visa',
        totalPrice: 'To study at an accredited France college or university or to study English at an English language institute',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: 'assets/images/shop/02.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        quantity: 'J Exchange Visa',
        totalPrice: 'For participation in an exchange program, including high school and university study',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    },
    {
        imgUrl: 'assets/images/shop/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'Product Text Here',
        quantity: 'M Student Visa',
        totalPrice: 'For non-academic or vocational study or training in the France',
        delImgUrl: 'assets/images/shop/del.png',
        delImgAlt: 'Remove Thumb',
    }
]


const TableSixTwo = () => {
    return (
        <Fragment>
            <div className="shop-cart" style={{ paddingTop: '30px' }}>
                <div className="container">
                    <div className="section-wrapper">
                        <h3>Student visa requirements for the France</h3>
                        <h4>The France Government offers three different student visa types</h4>
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="cat-quantity">Types of student visa</th>
                                        <th className="cat-toprice" style={{ textAlign: 'left' }}>Description</th>
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

export default TableSixTwo;