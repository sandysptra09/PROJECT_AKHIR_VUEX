<template>
    <div class="min-h-screen bg-gray-50 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                class="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                    <form @submit.prevent="performLogin">
                        <h4 class="mb-2 font-medium text-gray-700 xl:text-xl">Welcome to ShopEase!</h4>
                        <p class="mb-6 text-gray-500">Please sign-in to access your account</p>
                        <a href="#" class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
                            <img class="w-8 h-8 mr-2" src="https://i.imgur.com/fL7Po03.png" alt="logo">
                            ShopEase.
                        </a>

                        <div class="divide-y divide-gray-200">
                            <div class="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div class="mb-4">
                                    <label for="email"
                                        class="mb-2 inline-block text-sm font-medium text-gray-900 dark:text-white">Email
                                        </label>
                                    <input type="text"
                                        class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg-gray-50 py-2 px-3 text-sm outline-none focus:border-yellow-500 focus:bg-white focus:text-gray-600 focus:shadow"
                                        v-model="email" placeholder="Enter your email " autofocus="" />
                                </div>
                                <div class="mb-4">
                                    <div class="flex justify-between">
                                        <label class="mb-2 inline-block text-sm font-medium text-gray-900 dark:text-white"
                                            for="password">Password</label>

                                    </div>
                                    <div class="relative flex w-full flex-wrap items-stretch">
                                        <input type="password" id="password"
                                            class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg-gray-50 py-2 px-3 text-sm outline-none focus:border-yellow-400 focus:bg-white focus:text-gray-600 focus:shadow"
                                            v-model="password" placeholder="············" />
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <button
                                        class="grid w-full cursor-pointer select-none rounded-md border border-yellow-400 bg-yellow-400 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-green-600 hover:bg-red-600 hover:text-white focus:border-red-600 focus:bg-red-600 focus:text-white focus:shadow-none"
                                        type="submit">Sign in</button>
                                </div>
                                <p class="mb-4 text-center">
                                    New on ShopEase?
                                    <router-link to="/register">
                                        <a href="#"
                                            class="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">
                                            Create an
                                            account </a>
                                    </router-link>
                                </p>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        ...mapActions('auth', ['login']),
        async performLogin() {
            const credentials = {
                email: this.email,
                password: this.password,
            };

            const success = await this.login(credentials);

            if (success) {
                // Redirect to the desired route on successful login
                this.$router.push('/');

                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You can now access product page !',
                });

            } else {
                alert("Login Failed");

                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: 'Something went wrong. Please try again later.',
                });
            }
        },
    },
};
</script>