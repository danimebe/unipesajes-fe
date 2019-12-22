import React from 'react';
import Product from '../components/Product';

const ProductList = ({ products, pending, categories, filter, onCategorieClick }) => {
    return (
        <section className="container-fluid">
            <div className="row">
                <article className="col-md-3 col- justify-content-center">
                    <div className="accordion" id="accordionExample">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                    <button className="btn btn-link w-100 h-100" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h4 className="w-100 h-100 text-center">Categorias</h4>
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <ul>
                                        {
                                            categories.map(categorie => <li key={categorie._id}><a onClick={
                                                e => {
                                                    e.preventDefault();
                                                    onCategorieClick(categorie.name);
                                                }
                                            }><h5>{categorie.name}</h5></a></li>)
                                        }
                                        <li><a onClick={e => {
                                            e.preventDefault();
                                            onCategorieClick('ALL');
                                        }
                                        }><h5>Mostrar todos</h5></a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </article>
                <article className="container col-8 p-5">
                    {pending ?
                        <h1>Esperando</h1> :
                        <div className="d-flex flex-column flex-md-row justify-content-around">
                            {
                                products.length > 0 ? products.map(
                                    product => {
                                        if (filter !== 'ALL') {
                                            let productCategories = product.categories
                                            productCategories = productCategories.filter(categorie => categorie.name === filter);
                                            return productCategories.length > 0 ? <Product key={product._id} name={product.name} description={product.description} image={product.images[2]} /> : '';
                                        }
                                        return <Product key={product._id} name={product.name} description={product.description} image={product.images[2]} />
                                    }
                                ) : ''
                            }
                        </div>}
                </article>
            </div>
        </section>
    )

}

export default ProductList;

