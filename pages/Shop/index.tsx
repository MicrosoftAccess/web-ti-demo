import Layout from "../../components/Layout";
import Product from "../../components/Product";

export default function index() {
    return (

        <Layout>
            <div className="flex justify-center h-full">
                <div className="w-4/5 flex h-full flex-row">
                    <div className="w-1/5 flex-col rounded-l-xl h-full bg-black shadow-2xl">
                        <div className="h-10 text-white text-center text-xl w-full">
                            <h3>Categorias</h3>
                        </div>
                        <button className="h-10 w-full bg-black hover:bg-gray-400"></button>
                    </div>
                    <div className="w-full h-full bg-white rounded-r-xl overflow-y-auto shadow-2xl">
                        <div>
                            <Product></Product>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
