<template>
    <div class="container">
        <header>
            <div class="logo">
                <img src="../assets/img/Logo-AA-Orange.svg" alt="">
            </div>
            <nav>
                <ul>
                    <li v-for="(link, index) in links" :key=index><a :href="link.url">{{link.name}}</a></li>
                    <li><Toggle :mode="mode" @toggle="$emit('toggle')" /></li>
                </ul>
            </nav>
        </header>
    </div>    
</template>


<script>
import Toggle from '@/components/Toggle';

export default {
    name: 'Header',
    components: {
        Toggle
    },
    props: ['mode'],
    data() {
        return {
            links : 
            [
                {
                    name: 'Home',
                    url: '#home'
                },
                {
                    name: 'About',
                    url: '#about'
                },
                {
                    name: 'Skills',
                    url: '#skills'
                },
                // {
                //     name: 'Esperienze',
                //     url: '#experience'
                // },
                {
                    name: 'Portfolio',
                    url: '#portfolio'
                },
                {
                    name: 'Contatti',
                    url: '#contacts'
                },
            ],
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/style/variables.scss';

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 15px;
        transition: background 0.3s ease-in-out;
        margin-top: 10px;
        .logo {
            display: flex;
            align-items: center;
            img {
                width: 30%;
            }
        }
        ul {
            display: flex;
            width: 70%;
            align-items: center;
            li {
                margin-left: 1.25rem;
                font-size: 1.2rem;
                font-weight: 600;
                cursor: pointer;
                &:hover {
                    color: $orangeColor;
                }
            }
        }
    }
    
</style>