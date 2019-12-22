import React from 'react';
import '../assets/styles/Product.scss';

const Product = ({ name, description, image }) => (
    <div className="card">
        <img src={`https://unipesajes-files.s3.us-east-2.amazonaws.com/${image}`} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illo minima rerum delectus tempora tenetur optio, doloribus aut nulla facilis ab rem consectetur fugit architecto, natus eos, accusantium totam veniam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ratione quae eligendi rerum neque expedita consequuntur repudiandae quo id repellendus obcaecati alias, et quibusdam nulla autem, esse aliquid impedit nihil!</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
)

export default Product;