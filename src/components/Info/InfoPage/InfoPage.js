import React from "react";

import './InfoPage.css'

import Form from './../Form/Form';

const info = () => {
    return (
        <div className="main">
            <div className="main__hero">
                <h1>Make your dinner</h1>
                <h2 className="main__hero--delicious">delicious {`&`}&nbsp;</h2>
                <div>
                    <h2>healthy</h2>
                </div>
            </div>
            <div className="main__reasons">
                <div className="reasons__h1">
                    <h1>Reasons to trust us</h1>
                </div>
                <div className="reasons__table">
                    <div className="table">
                        <div className="table__icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div className="table__paragraph">
                            <h2>fast delivery</h2>
                        </div>
                        <div className="table__container--description">
                            <div className="table__description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nunc fermentum viverra
                                    libero sit amet accumsan. Quisque metus
                                    quam, tincidunt tristique gravida ultricies,
                                    tristique in lorem. Nam finibus consectetur
                                    orci, id imperdiet ligula viverra vel.
                                    Aliquam erat volutpat. Ut interdum, nisl
                                    quis egestas imperdiet, diam est mattis
                                    magna, ut consequat sem.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="table">
                        <div className="table__icon">
                            <i class="fas fa-apple-alt"></i>
                        </div>
                        <div className="table__paragraph">
                            <h2>best quality</h2>
                        </div>
                        <div className="table__container--description">
                            <div className="table__description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nunc fermentum viverra
                                    libero sit amet accumsan. Quisque metus
                                    quam, tincidunt tristique gravida ultricies,
                                    tristique in lorem. Nam finibus consectetur
                                    orci, id imperdiet ligula viverra vel.
                                    Aliquam erat volutpat. Ut interdum, nisl
                                    quis egestas imperdiet, diam est mattis
                                    magna, ut consequat sem.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="table">
                        <div className="table__icon">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                        <div className="table__paragraph">
                            <h2>pretty prices</h2>
                        </div>
                        <div className="table__container--description">
                            <div className="table__description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nunc fermentum viverra
                                    libero sit amet accumsan. Quisque metus
                                    quam, tincidunt tristique gravida ultricies,
                                    tristique in lorem. Nam finibus consectetur
                                    orci, id imperdiet ligula viverra vel.
                                    Aliquam erat volutpat. Ut interdum, nisl
                                    quis egestas imperdiet, diam est mattis
                                    magna, ut consequat sem.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="table">
                        <div className="table__icon">
                            <i class="fas fa-store"></i>
                        </div>
                        <div className="table__paragraph">
                            <h2>wide stock </h2>
                        </div>
                        <div className="table__container--description">
                            <div className="table__description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nunc fermentum viverra
                                    libero sit amet accumsan. Quisque metus
                                    quam, tincidunt tristique gravida ultricies,
                                    tristique in lorem. Nam finibus consectetur
                                    orci, id imperdiet ligula viverra vel.
                                    Aliquam erat volutpat. Ut interdum, nisl
                                    quis egestas imperdiet, diam est mattis
                                    magna, ut consequat sem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__form">
                <h1>Contact US</h1>
                <Form/>
            </div>
        </div>
    );
};

export default info;
