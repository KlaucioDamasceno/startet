<script setup>

function authCustom(to, from) {
    const user = useSupabaseUser();
    if (user.value) {
        return
    }
    return navigateTo("/login");
};

definePageMeta({
    layout: 'custom',
    middleware: ['auth',]
});
const { makes } = useCars();


const info = useState('adInfo', () => {
    return {
        make: '',
        model: '',
        year: '',
        miles: '',
        price: '',
        city: '',
        seats: '',
        features: '',
        description: '',
        image: null,
    };
});
const onChangeInput = (data, name) => {
    info.value[name] = data;
}




const inputs = [
    {
        id: 1,
        title: "Model *",
        name: "model",
        placeholder: "Civic"
    },
    {
        id: 2,
        title: "Year *",
        name: "year",
        placeholder: "2019"
    },
    {
        id: 3,
        title: "Miles *",
        name: "miles",
        placeholder: "10000"
    },
    {
        id: 4,
        title: "City *",
        name: "city",
        placeholder: "Brasília"
    },
    {
        id: 5,
        title: "Number os Seats *",
        name: "seats",
        placeholder: "5"
    },
    {
        id: 6,
        title: "Features *",
        name: "feature",
        placeholder: "Leather Interior, No Accidents"
    },

];

</script>

<template>
    <div>
        <div>
            <h1 class="text-6xl mt-24">Create a New Listing</h1>
        </div>
        <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
            <SelectCustom title="Make *" :options="makes" name="make" @change-input="onChangeInput" />
            <InputCustom v-for="input in inputs" :key="input.id" :title="input.title" :name="input.name"
                :placeholder="input.placeholder" @change-input="onChangeInput" />
            <TextAreaCustom title="Description *" name="description" placeholder="" @change-input="onChangeInput" />
            <ImageCustom @change-input="onChangeInput" />
        </div>
    </div>
</template>