import React, {Component} from 'react';
// import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button, Nav} from 'react-bootstrap';

import SectionHeader from "../Contents/SectionHeader";
import ImageTextBox from "../Contents/ImageTextBox";

//img
import banner from '../static/img/header_concept.png'
import service from '../static/img/black-circle-service.png'
import career from '../static/img/black-circle-career.png'
import area from '../static/img/black-circle-area.png'
import partner from '../static/img/black-circle-partner.png'
import workflow from '../static/img/black-circle-workflow.png'
import historyCard from '../static/img/black-circle-historycard.png'
import nowWork from '../static/img/black-circle-nowwork.png'
import hobby from '../static/img/black-circle-hobby.png'


import robot from '../static/img/robot.png'
import pepper from '../static/img/pepper.png'
import BasisPointIkebukuro from '../static/img/basispoint_ikebukuro.png'
import EightDaysCafe from '../static/img/eight_days_cafe.png'
import HistoryCard from '../static/img/history_card_imoto.png'
import Card from '../static/img/card.png'
import BookMeter from '../static/img/book_meter.png'
import Poly from '../static/img/poly.png'
import Pinterest from '../static/img/pinterest.png'
import MovieCreate from '../static/img/movie_create.png'
import Juggling from '../static/img/juggling.png'
import RobotApp from '../static/img/robot_app.png'
import BMonster from '../static/img/b_monster.jpeg'
import Pixiv from '../static/img/pixiv.png'

import IdealFashion from '../static/img/ideal_image.png'

import './Main.css';

//　TODO: リファクタで同じ箇所を外部ファイルに修正していく
// TODO: ヘッダーとフッターを共通化する
// TODO: バナーの内容を時間でのスクロールとリンクが飛べるようにする
// TODO: ハッシュタグをクリックした際に、タブを開いて検索できるようにしておく
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: [],
        }
    }

    componentWillMount() {
        let service_data = [
            {
                "name": "rentalBook",
                "img": pepper,
                "text": "レンタルブック/貸したいものを共有スペースにおいて、登録！その瞬間からみんなが使えて、楽しめる！"
            },
            {
                "name": "予約システム",
                "img": pepper,
                "text": "コアワーキングシステムや貸し会議室など、手軽に予約できるシステムを組み合わせました"
            },
            {
                "name": "コミックマネー",
                "img": pepper,
                "text": "漫画を読んで、感想を書くだけ！あなたの言葉で大好きな漫画を伝えよう！"
            }
        ];
        let service = [];

        for (var i in service_data) {
            let center = false;
            if (i % 2 != 1) {
                center = true;
            }
            service.push(<ImageTextBox name={service_data[i].name} img={service_data[i].img} text={service_data[i].text}
                                       center={center}/>)
        }
        this.setState(() => ({
            service: service
        }));
    }

    render() {
        return (
            <div className="Main">
                <header className="header">
                    {/* ヘッダー */}
                    <p>Imoto Ken</p>
                </header>
                <div class="bannar">
                    <img src={banner} alt="感動を拡げるものを創る　思いがけない感動をつくる、ITの技術や多くの仲間とともに、一緒にビジネスを作り育てます！"></img>
                </div>
                {/* 略歴 */}
                <section class="sub-container">
                    <div class="content-text">
                        <SectionHeader img={career} alt={"概歴"}
                                       text={"#IoTエンジニア #ホームページ作成 #Pepperアプリケーション開発 #ITコンサルタント #Webシステム"}/>
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
                </section>
                <section class="sub-container">
                    {/*  稼働中サービス  */}
                    <div className="content-text">
                        <SectionHeader img={service} alt={"稼働中サービス"}
                                       text={"#IoTエンジニア #ホームページ作成 #Pepperアプリケーション開発 #ITコンサルタント #Webシステム"}/>
                    </div>
                    <div className="service-area">
                        {this.state.service}
                    </div>


                </section>
                {/*出没地域*/}
                <section className="sub-container">
                    <div className="content-text">
                        <SectionHeader img={area} alt={"出没地域"}
                                       text={"#basisPoint #eight-days-cafe #カフェ"}/>
                    </div>
                    <ul className={"content-area"}>
                        <li><a href={"https://basispoint.tokyo/store/coworking/ikebukuro/"}>
                            <img src={BasisPointIkebukuro}
                                 alt={"BasisPoint池袋店"} width={"400px"}></img>
                        </a></li>
                        <li><a href={"https://eight-days.com"}>
                            <img src={EightDaysCafe}
                                 alt={"eight days cafe "} width={"400px"}></img>
                        </a></li>
                    </ul>
                </section>
                {/*/!*パートナー*!/*/}
                {/*<section className="sub-container">*/}
                {/*    <div className="content-text">*/}
                {/*        <SectionHeader img={partner} alt={"パートナー"}*/}
                {/*                       text={"#IoTエンジニア #ホームページ作成 #Pepperアプリケーション開発 #ITコンサルタント #Webシステム"}/>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*仕事の流れ*/}
                <section className="sub-container">
                    <div className="content-text">
                        <SectionHeader img={workflow} alt={"仕事の流れ"}
                                       text={"#ワークフロー #請求書 #納品書"}/>
                    </div>
                    <iframe
                        width={"800px"}
                        height={"480px"}
                        src={"https://docs.google.com/presentation/d/13KcHGZCBG2LC5aScRDlzVShOj6cxCfTmVg4FFFIRlaE/embed?start=true&amp;loop=false&amp;delayms=3000&slide=id.p"}></iframe>
                </section>
                {/*ヒストリーカード*/}
                <section className="sub-container">
                    <div className="content-text">
                        <SectionHeader img={historyCard} alt={"ヒストリーカード"}
                                       text={"#IoTエンジニア #ホームページ作成 #Pepperアプリケーション開発 #ITコンサルタント #Webシステム"}/>
                    </div>
                    <ul className={"content-area"}>
                        <li><img src={HistoryCard} alt={"ヒストリーカード"} width={"400px"}></img></li>
                        <li><img src={HistoryCard} alt={"ヒストリーカード"} width={"400px"}></img></li>
                    </ul>
                </section>
                {/*関わっている仕事*/}
                <section className="sub-container">
                    <div className="content-text">
                        <SectionHeader img={nowWork} alt={"現在関わっている仕事"}
                                       text={"#香水 #IT顧問 #エンジニア #リードエンジニア #ベンチャー #小売店 #ホームページ作成 #ホームページ運用 #カメラマン"}/>
                    </div>
                    <ul className={"content-area"}>
                        <li><a href={"https://www.perfume-idealfashion.com"}><img src={IdealFashion}
                                                                                  alt={"ideal fashionのコンサルタント/IT顧問"}
                                                                                  width={"200px"}></img></a></li>
                        <li><img src={Card} alt={"某ITベンチャーのリードエンジニア"} width={"200px"}></img></li>
                        <li><img src={Card} alt={"小売店/ホームページ作成/運用"} width={"200px"}></img></li>
                        <li><img src={Card} alt={"カメラマン/ホームページ作成/運用"} width={"200px"}></img></li>
                    </ul>

                </section>
                {/*趣味*/}
                <section className="sub-container">
                    <div className="content-text">
                        <SectionHeader img={hobby} alt={"趣味"}
                                       text={"#3Dドットモデリング #3Dモデリング #2Dドットモデリング #動画作成 #読書 #ジャグリング #ロボットアプリ #b-monster #ボクシング #絵 #イラスト"}/>
                    </div>
                    <ul className={"content-area"}>
                        <li><a href={"https://poly.google.com/user/7JFEvn0MZOq"}><img src={Poly} alt={"3Dドットモデリング"}
                                                                                      width={"200px"}></img></a>
                        </li>
                        <li><a href={"https://www.pinterest.jp/k09690626149/"}><img src={Pinterest}
                                                                                    alt={"2Dドットモデリング"}
                                                                                    width={"200px"}></img></a></li>
                        <li><a href={"https://www.pixiv.net/member.php?id=21318395"}><img src={Pixiv}
                                                                                    alt={"絵/イラスト"}
                                                                                    width={"200px"}></img></a></li>
                        <li><a href={"https://www.youtube.com/channel/UCgy6znZK7Lx-bAx1-IgsdCQ?view_as=subscriber"}><img
                            src={MovieCreate} alt={"動画作成"} width={"200px"}></img></a></li>
                        <li><a href={"https://www.youtube.com/channel/UCgy6znZK7Lx-bAx1-IgsdCQ?view_as=subscriber"}><img
                            src={Juggling} alt={"ジャグリング"} width={"200px"}></img></a></li>
                        <li><a href={"https://bookmeter.com/users/830533"}><img src={BookMeter} alt={"読書"}
                                                                                width={"200px"}></img></a></li>
                        <li><a href={"https://github.com/kenimo49?tab=repositories"}><img src={RobotApp}
                                                                                          alt={"ロボットアプリ"}
                                                                                          width={"200px"}></img></a>
                        </li>
                        <li><a href={"https://www.b-monster.jp"}><img src={BMonster}
                                                                      alt={"b-monster ボクシング"}
                                                                      width={"200px"}></img></a>
                        </li>
                    </ul>
                </section>
                <footer class="font-s">
                    {/*  フッター  */}
                    <div class="footer-info">
                        <p>ITエンジニア 井本賢</p>
                        <p>感動を拡げるものを創る おもいがけない感動を作る、最高に面白いさまざまなITの技術を使った場所やシステムを作ります</p>
                    </div>
                    <div className="footer-sns">
                        <p>Connect</p>
                        <ul>
                            <li><a href="mailto:k096906261.49@gmail.com">MAIL: k096906261.49@gmail.com</a></li><br></br>
                            <li><a href={"https://twitter.com/imodeicious"}>twitter:@imodeicious </a></li><br></br>
                            <li><a href={"https://github.com/kenimo49?tab=repositories"}>github: kenimo49</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Main;
