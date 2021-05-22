dataSet = [];

$(document).ready(function() {
    
    const appId = '025f7cc11c7f71823fc4edc95f93068b';
    const url = `http://api.mediastack.com/v1/news?access_key=${appId}`
    const respuesta = fetch(url,{method: 'GET'});
    const noticias =  respuesta.then( response => response.json() );
    noticias.then( result => {         
        setTableData(result.data);
    });    
} );


function setTableData(data){
    
    $('#myTable').DataTable( {
        "data":  data,
        "columns": [
            { "data": "title" },
            { "data": "description" },
            { "data": "category" },
            { "data": "source" },
            { "data": "url" },
            { "data": "country" }
        ]
    } );
}



