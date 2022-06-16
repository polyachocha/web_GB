console.log('useFull');

loadScript('js/a.js', ()=>{
    console.log('from useFull a', a);

    loadScript('js/b.js', ()=>{
        console.log('result sum = 11', a + b);
    })
})