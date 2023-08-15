<script setup lang="ts">
const router = useRouter();

const client = useSupabaseClient();
const email = ref("");
const password = ref("");


definePageMeta({
    layout: 'custom'
});


async function signUp() {
    try {
        const { error } = await client.auth.signInWithPassword({
            email: email.value,
            password: password.value
            // email: 'nuxt@gmail.com',
            // password: '123456'
        });
        if (error) throw error;
        router.push("/profile/listings");
    } catch (error) {
        alert("Login ou Senha Inválido")
    }
}

interface Info {
  value: {
    [key: string]: any; // This allows any property name and any value type
  };
}

const info: Info = useState('adInfo', () => {
    return {
        email: '',
        password: '',
    };
});

const onChangeInput = (data: string, name: string) : void =>{
    info.value[name]= data;
    email.value = info.value['email']
    password.value = info.value['password']
}

const inputs = [
    {
        id: 1,
        title: "E-mail *",
        name: "email",
        placeholder: "email@dominio.com",
        tipo: 'email'
    },
    {
        id: 2,
        title: "Password *",
        name: "password",
        placeholder: "**********",
        tipo: 'password'
    },
];


</script>


<template>
    <div>
        <div>

        </div>
        <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
            <InputLogin v-for="input in inputs" :key="input.id" :tipo="input.tipo" :title="input.title" :name="input.name" :placeholder="input.placeholder" @change-input="onChangeInput"/>
        </div>
        <br>
        <button class="bg-red-400 p-3 rounded text-while font-bold" @click="signUp">Login</button>
    </div>
</template>