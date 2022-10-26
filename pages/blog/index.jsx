import Link from "next/link";
import Layout from "../../components/layout";


export default function index({data}){
    return(
        <Layout>
            <h1>Articulos del Blog</h1>
            {
                data.map((post)=>(
                    <div key={post.id}>
                        <h3>
                            <Link href={`/blog/${post.id}`}>
                                <a>{post.id} - {post.title}</a>
                            </Link>
                        </h3>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </Layout>
    )
}

//esta funcion se va a ejecutar solamente en el servidor
// el siguiente metodo es unicamente para la crecion de sitios estaticos
export async function getStaticProps(){
   try {
     

            //sino se especifica configuracion del fetch se va a realizar un get
            const res=await fetch('https://jsonplaceholder.typicode.com/posts')
            const data=await res.json()
            return {
                props:{
                    data:data
                }
            }

   } catch (error) {
    
   }
}