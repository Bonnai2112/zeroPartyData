import Layout from "../components/layout";
import "../style/globals.css";

export default function MyApp({Component, PageProps}) {
    return (
        <Layout>
            <Component {...PageProps} />
        </Layout>
    )
}