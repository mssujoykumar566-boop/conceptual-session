// cache ---> SSG -- Static Site genaration
//dynamic ---> SSR -- Server Side Rendering (prottek request e update hobe)
//revalidate ---> ISR -- Incremental (kichu time por por update hobe) Site genaration

import React from 'react';

const ModelsPage =async () => {
    // const res = await fetch('http://localhost:5000/products',{next: {revalidate: 10}});
    const res = await fetch ('http://localhost:5000/products',{cache: 'no-store'});
    const models = await res.json();
    console.log(models)
    return (
        <div>
            <h1>Models page</h1>
            <div className='grid grid-cols-3 gap-5' >
                {
                    models.map(model => <div className='border p-5 rounded-lg' key={model.id}>
                        <h2 className='text-2xl font-bold'>{model.title}</h2>
                        <p>{model.description}</p>
                        <div className='flex gap-5'>
                            <h4 className='font-semibold'>{model.category}</h4>
                            <h4 className='font-semibold text-green-500'>${model.price}</h4>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ModelsPage;