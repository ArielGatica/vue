<template>
    <v-container fluid grid-list-md text-xs-left>
        <v-layout row wrap align-center justify-center>
            <v-flex xs9 mt-11>
                <v-card>
                    <v-toolbar 
                        dark>
                        <v-toolbar-title class="headline">
                            <v-icon large>alarm</v-icon> Alarmas
                        </v-toolbar-title>
                    </v-toolbar>

                    <v-data-table
                        :headers="headers"
                        :items="items"
                        :footer-props="{
                            prevIcon: 'arrow_back_ios',
                            nextIcon: 'arrow_forward_ios'
                        }">

                    </v-data-table>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                items: [
                    { _id: 1, name: 'VAR14', type: 'RNC', monitoreo: 'piualarm 01', alterable: 'Manual' },
                    { _id: 2, name: 'TER062', type: 'RNC', monitoreo: 'piualarm 01', alterable: 'Manual' },
                    { _id: 3, name: 'TER062', type: 'RNC', monitoreo: 'piualarm 01', alterable: 'Manual' },
                    { _id: 4, name: 'VAR14', type: 'RNC', monitoreo: 'piualarm 01', alterable: 'Automático' },
                    { _id: 5, name: 'VAR14', type: 'RNC', monitoreo: 'piualarm 02', alterable: 'Automático' },
                    { _id: 6, name: 'NYT19', type: 'RNC', monitoreo: 'piualarm 02', alterable: 'Manual' },
                    { _id: 7, name: 'NYT19', type: 'RNC', monitoreo: 'piualarm 02', alterable: 'Automático' },
                    { _id: 8, name: 'VAR14', type: 'RNC', monitoreo: 'piualarm 03', alterable: 'Manual' },
                    { _id: 9, name: 'TER062', type: 'RNC', monitoreo: 'piualarm 03', alterable: 'Desabilitado' },
                    { _id: 10, name: 'NYT19', type: 'RNC', monitoreo: 'piualarm 03', alterable: 'Automático' },
                ],
                headers:[
                    { text: 'Nodo', value: 'name' },
                    { text: 'Type', value: 'type' },
                    { text: 'Hardware', value: 'monitoreo' },
                    { text: 'Alterable', value: 'alterable' }
                ]
            }
        }
    }
</script>