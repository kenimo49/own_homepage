import React from 'react';
// import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button, Nav} from 'react-bootstrap';

//img
import banner from '../static/img/pc.png'
import service from '../static/img/black-circle-service.png'
import career from '../static/img/black-circle-career.png'
import robot from '../static/img/robot.png'
import pepper from '../static/img/pepper.png'

import './Main.css';

//　TODO: リファクタで同じ箇所を外部ファイルに修正していく
function Main() {
    return (
        <div className="Main">
            <header className="header">
                {/* ヘッダー */}
                <p>Imoto Ken</p>
            </header>
            <div class="bannar">
                <img src={banner} alt="PC-bannar"></img>
            </div>
            <div>
                {/* 略歴 */}
                <div class="sub-container">
                    <div class="content-text">
                        <div>
                            <div class="item-area">
                                <span class="item">
                                    <img src={career} ale="circle"></img>
                                </span>
                            </div>
                            <div class="font-s simple-tag"> #IoTエンジニア #ホームページ作成 #Pepperアプリケーション開発 #ITコンサルタント #Webシステム</div>
                        </div>
                        <div class="career-area">
                            <span class="font-s">2019.04 ~ 2019.12 </span>
                            <p class="font-s ">Pepperアプリケーション設計/開発/テスト スマホアプリゲームと連携するためのAPIサーバ</p>
                        </div>
                        <div className="career-area">
                            <span class="font-s">2019.04 ~ 2019.12 </span>
                            <p class="font-s">Pepperアプリケーション開発/ </p>
                        </div>
                    </div>
                    <img class="content-img" src={robot} alt="robot-image"></img>
                </div>
            </div>
            <div class="sub-container">
                {/*  稼働中サービス  */}
                <div className="content-text">
                    <div>
                        <div class="item-area">
                            <span class="item">
                                <img src={service} alt="circle"></img>
                            </span>
                        </div>
                        <div class="font-s simple-tag"> #IoTエンジニア #ホームページ作成 #Pepperアプリケーション開発 #ITコンサルタント
                            #Webシステム
                        </div>
                    </div>
                </div>
                <div class="service-area">
                {/*  サービス  */}
                    <div class="service-block">
                        <p class="service-name">Pepper Application 開発</p>
                        <img src={pepper} alt="pepper"></img>
                        <p class="font-s">Pepperのアプリケーション開発Pepperのアプリケーション開発Pepperのアプリケーション開発Pepperのアプリケーション開発Pepperのアプリケーション開発</p>
                    </div>
                    <div className="service-block service-block-center">
                        <p className="service-name">Pepper Application 開発</p>
                        <img src={pepper} alt="pepper"></img>
                        <p className="font-s">Pepperのアプリケーション開発Pepperのアプリケーション開発Pepperのアプリケーション開発Pepperのアプリケーション開発Pepperのアプリケーション開発</p>
                    </div>
                    <div className="service-block">
                        <p className="service-name">Pepper Application 開発</p>
                        <img src={pepper} alt="pepper"></img>
                        <p className="font-s">Pepperのアプリケーション開発Pepperのアプリケーション開発Pepperのアプリケーション開発Pepperのアプリケーション開発Pepperのアプリケーション開発</p>
                    </div>
                </div>
            </div>
            <footer class="font-s" >
                {/*  フッター  */}
                <div class="footer-info">
                    <p>個人事業主 井本賢</p>
                    <p>感動を拡げるものを創る 思いがけない感動を作る場所や、最高に面白いITの技術を使った場所やシステムを作りつづけます</p>
                </div>
                <div className="footer-sns">
                    <p>Connect</p>
                    <span>MAIL: ◯◯◯@gmail.com</span>
                </div>
            </footer>
        </div>
    );
}

export default Main;
