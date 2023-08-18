import cars from "@/data/cars.json"

export default defineEventHandler((event)=>{
    const { id } = event.context.params;
    const {nome} =  getQuery(event);

    let filteredCars = cars;
    filteredCars = filteredCars.filter(car =>{
        return car.id === id;
    });

    if(nome){
        filteredCars = filteredCars.filter(car =>{
            car.name.toLowerCase() === nome.toLowerCase();
        });
    }


    return filteredCars;
});