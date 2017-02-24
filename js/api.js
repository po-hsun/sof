//@flow
'use strict';

const people = [
    {
        name: 'Nader',
        age: 36
    }, {
        name: 'Amanda',
        age: 24
    }, {
        name: 'Jason',
        age: 44
    }
]

// export default( ) => {
//     return new Promise(( resolve, reject ) => {
//         setTimeout( ( ) => {
//             if (Math.round( Math.random( ) % 2 ))
//                 return resolve( people );
//             else {
//                 return reject( 'Error' );
//             }
//         }, 3000 )
//     })
// }

function fetchData( ) {
    return new Promise(( resolve, reject ) => {
        setTimeout( ( ) => {
            if (Math.round( Math.random( ) % 2 ))
                return resolve( people );
            else
                return reject( new Error('Error') );
            }
        , 3000 );
    });
}

export default async( ) => {
    return await fetchData( );
}
