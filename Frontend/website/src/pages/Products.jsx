import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../components/Navigation/Navigation";
import BasicCard from '../components/BasicCard/BasicCard';
import BasicPagination from '../components/Pagination/Pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Product() {
    const [allJSONProductArray, setAllJSONProductArray] = useState([]);
    const [allProductArray, setAllProductArray] = useState([]);
    const [productArray, setProductArray] = useState([]);
    const [filters, setFilters] = useState({name: '', category: 'all', price: 'default'});
    const [name, setName] = useState('');
    const [category, setCategory] = useState('all');
    const [price, setPrice] = useState('default');

    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        axios.get(`http://localhost:3000/api/products`)
        .then(response => {
            const products = response.data;
            setAllJSONProductArray(products);
            const productCards = products.map((product, index) => (
                <BasicCard
                    id={index+1}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                />
            ));
        setAllProductArray(productCards);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    }

    function containsSubstring(word, substring) {
        const regex = new RegExp(`(?=.*${substring})`, 'i');
        return regex.test(word);
    }

    function filterProducts(pageNumber, pageSize, filters){
        var start=(pageNumber-1)*pageSize;
        var end=start+pageSize;
        
        var tempAll=[];
        var sortingArray=[];
        var i=0;
        while(i<allProductArray.length){
            if(
                ((filters.name=='')||(filters.name!=''&&containsSubstring(allJSONProductArray[i].name, filters.name)))&&
                ((filters.category=='all')||(filters.category!='all'&&filters.category==allJSONProductArray[i].productCategory))
            ){
                tempAll.push(allProductArray[i]);
                sortingArray.push(allJSONProductArray[i].price);
            }
            i++;
        }

        if(filters.price=='asc'){
            for(i=0;i<tempAll.length;i++){
                for(var j=i+1;j<tempAll.length;j++){
                    if(sortingArray[i]>sortingArray[j]){
                        var temp=sortingArray[i];
                        sortingArray[i]=sortingArray[j];
                        sortingArray[j]=temp;

                        temp=tempAll[i];
                        tempAll[i]=tempAll[j];
                        tempAll[j]=temp;
                    }
                }
            }
        }
        else if(filters.price=='desc'){
            for(i=0;i<tempAll.length;i++){
                for(var j=i+1;j<tempAll.length;j++){
                    if(sortingArray[i]<sortingArray[j]){
                        var temp=sortingArray[i];
                        sortingArray[i]=sortingArray[j];
                        sortingArray[j]=temp;

                        temp=tempAll[i];
                        tempAll[i]=tempAll[j];
                        tempAll[j]=temp;
                    }
                }
            }
        }

        var temp=[];
        for(i=start;i<end;i++){
            temp.push(tempAll[i]);
        }

        setProductArray(temp);
    }

    const handlePageChange = (pageNumber, pageSize) => {
        filterProducts(pageNumber, pageSize, filters);
    };

    function handleSubmit(e){
        e.preventDefault()
        setFilters({name: name, category: category, price: price})
        filterProducts(1, 8, filters);
    }

    return (
        <div className='flex'>
            <div className='left-div'>

                <form className='filter' onSubmit={handleSubmit} style={{ 
                    backgroundColor: '#f0f0f0', 
                    border: '2px solid green', 
                    borderRadius: '10px', 
                    padding: '10px', 
                    marginLeft:'4vmin',
                    width: '40vmin', 
                    height:'70vmin',
                    marginTop: '75px'
                }}>
                <input 
                    type='text' 
                    placeholder='Search Product Name' 
                    style={{ 
                        width: '30vmin', 
                        padding: '8px', 
                        border: '2px solid green', 
                        borderRadius: '10px', 
                        fontSize: '16px', 
                        marginTop: '40px'
                    }} 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    />
                    
                    
                    <select 
                        value={category}  
                        onChange={(e) => setCategory(e.target.value)}
                        style={{ 
                            width: '30vmin', 
                            padding: '10px',
                            border: '2px solid green', 
                            borderRadius: '5px', 
                            fontSize: '16px', 
                            marginTop: '10px' 
                        }}
                        >
                        <option value={'all'}>Choose a category</option>
                        <option value={'Fruits'}>Fruits</option>
                        <option value={'Vegetables'}>Vegetables</option>
                        <option value={'Dairy'}>Dairy</option>
                        <option value={'Meat'}>Meat</option>
                        <option value={'Chicken'}>Chicken</option>
                        <option value={'Seeds'}>Seeds</option>
                        <option value={'Jars'}>Jars</option>
                        <option value={'Juices'}>Juices</option>
                        <option value={'Others'}>Others</option>
                    </select>


                    <fieldset style={{ 
                        border: '2px solid green', 
                        borderRadius: '5px', 
                        padding: '10px',
                        marginTop: '0px',
                        width:'20vmin',
                        }}>
                        <legend style={{ 
                            fontSize: '16px', 
                            fontWeight: 'bold' 
                        }}>Price</legend>
                        <label style={{ marginBottom: '5px' , marginLeft: '-36px'}}>
                            <input 
                            type="radio" 
                            name="priceOrder" 
                            value="default" 
                            checked={price === 'default'} 
                            onChange={() => setPrice('default')} 
                            defaultChecked 
                            /> Default
                        </label>
                        <label style={{ marginBottom: '5px' , marginRight: '8px'}}>
                            <input 
                            type="radio" 
                            name="priceOrder" 
                            value="asc" 
                            checked={price === 'asc'} 
                            onChange={() => setPrice('asc')} 
                            /> Ascending
                        </label>
                        <label style={{ marginBottom: '5px', marginRight: '-2px' }}>
                            <input 
                            type="radio" 
                            name="priceOrder" 
                            value="desc" 
                            checked={price === 'desc'} 
                            onChange={() => setPrice('desc')} 
                            /> Descending
                        </label>
                    </fieldset>


                    <input 
                        type='submit' 
                        value='Submit' 
                        style={{ 
                            width:'30vmin',
                            padding: '10px 20px', 
                            backgroundColor: 'green', 
                            color: 'white', 
                            border: '2px solid green', 
                            borderRadius: '20px', 
                            fontSize: '16px', 
                            marginTop: '10px', 
                            cursor: 'pointer', 
                            transition: 'background-color 0.3s, transform 0.3s', 
                            '&:hover': {
                            backgroundColor: '#08088', 
                            transform: 'scale(1.05)' 
                            }
                        }}
                    />
                </form>

            </div>
            <div className='right-div'>
                <Navigation />
                <div className='product-container'>
                    {productArray && productArray.length > 0 ? productArray : allProductArray.slice(0, 8)}
                </div>
                <div className="pagination">
                    <BasicPagination onPageChange={handlePageChange} />
                </div>
            </div>
        </div>
    );
}

export default Product;