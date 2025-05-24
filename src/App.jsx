import './App.css';
import MijnButton from "./components/button/MijnButton.jsx";
import Product from "./components/button/Product.jsx";
import tile from "./components/button/Tile.jsx";
import Tile from "./components/button/Tile.jsx";

// Ik heb de eerste stap van de opdracht uitgecommentarieerd. Geen idee of deze moest blijven staan of verwijderd moest worden.


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                {/*<button onClick={(e) => console.log(e.target.textContent)}>to the collection</button>*/
                }
                {/*<button onClick={(e) => console.log(e.target.textContent)}>shop all bags</button>*/
                }
                {/*<button onClick={(e) => console.log(e.target.textContent)}disabled>pre-order</button>*/
                }

                <MijnButton
                    text="to the collection"
                    onClick={(e) => console.log(e.target.textContent)}
                />
                <MijnButton
                    text="Shop all bags"
                    onClick={(e) => console.log(e.target.textContent)}
                />
                <MijnButton
                    text="pre order"
                    onClick={(e) => console.log(e.target.textContent)}
                />

                <main>
                    {/*<article>*/}
                    {/*    <span>label</span>*/}
                    {/*    <img src={"src/assets/bag_1.png"} alt={"tas"}/>*/}
                    {/*    <p>tas</p>*/}
                    {/*    <h4>9045</h4>*/}

                    {/*</article>*/}
                    <Product
                        labeltekst={"Best seller"}
                        imgPath={"src/assets/bag_1.png"}
                        altTekst={"tas"}
                        tasNaam={"The Handy Bag"}
                        price={"400"}
                    />
                    <Product
                        labeltekst={"Best seller"}
                        imgPath={"src/assets/bag_2.png"}
                        altTekst={"tas"}
                        tasNaam={"The stylish bag"}
                        price={"250"}
                    />
                    <Product
                        labeltekst={"New collection"}
                        imgPath={"src/assets/bag_3.png"}
                        altTekst={"tas"}
                        tasNaam={"The simple bag"}
                        price={"250"}
                    />
                    <Product
                        labeltekst={"New collection"}
                        imgPath={"src/assets/bag_4.png"}
                        altTekst={"tas"}
                        tasNaam={"The trendy bag"}
                        price={"250"}
                    />
                </main>
                <footer>
                    <Tile
                        // // imgPath={"src/assets/brand.png"}
                        // altTekst={"Brand"}
                        title={"The Brand"}
                        text={"                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus impedit ipsa molestias possimus praesentium sapiente ut voluptas. Accusantium, aliquam dicta eligendi facere iure laborum nam officiis possimus reprehenderit veniam!"}
                    />
                    <Tile
                        imgPath={"src/assets/brand.png"}
                        altTekst={"Brand"}
                        // title={"titel"}
                        // text={"tekst"}
                    />
                    <Tile
                        imgPath={"src/assets/our_story.png"}
                        altTekst={"Brand"}
                        // title={"titel"}
                        // text={"tekst"}
                    />
                    <Tile
                        // imgPath={"src/assets/our_story.png"}
                        // altTekst={"Brand"}
                        title={"Our Story"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus impedit ipsa molestias possimus praesentium sapiente ut voluptas. Accusantium, aliquam dicta eligendi facere iure laborum nam officiis possimus reprehenderit veniam!"}
                    />

                </footer>

            </nav>
        </>
    );
}

export default App;


