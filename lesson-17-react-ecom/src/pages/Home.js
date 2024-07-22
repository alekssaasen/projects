import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products";

function Home () {
    
    const [featured, setFeatured] = useState({});

    useEffect(() => {

        async function fetchFeaturedProduct () {

            await fetch("https://play-ecom-api.allcodeapp.com/api/featured")
                .then(async (data) => {

                    const response = await data.json();
                    setFeatured(response);
                    
                });

        }

        fetchFeaturedProduct();

    }, []);

    return(
        <main>
            <header className="h-[30rem] w-screen relative">
                <img src={featured.bannerUrl} className="h-[30rem] w-screen object-cover" />
                <div className="flex justify-center text-center h-[30rem] w-screen bottom-0 bg-gray-900/80 absolute">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-white text-6xl mb-8">{featured.promoTitle}</h1>
                        <Link to={"/product/" + featured.id} className="bg-white p-4 text-black rounded-xl w-[20rem]">
                            View Product
                        </Link>
                    </div>
                </div>
            </header>
            <Products />
        </main>
    );
}

export default Home;