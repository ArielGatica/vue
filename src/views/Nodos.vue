<template>
    <v-container fluid grid-list-md text-xs-left>
        <v-layout row wrap align-center justify-center>
            <v-flex xs9 mt-11>
                <v-card>
                    <v-toolbar 
                        dark
                        >
                        <v-toolbar-title class="headline">
                            <v-icon size="31">device_hub</v-icon> Nodos
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon size="31">edit</v-icon>
                        </v-btn>
                        <v-btn icon @click="dialogAdd = true">
                            <v-icon size="31">add</v-icon>
                        </v-btn>
                    </v-toolbar>

                    <v-data-table
                        v-model="selected"
                        show-select
                        single-select
                        item-key="_id"
                        :headers="headers"
                        :items="items"
                        :footer-props="{
                            prevIcon: 'arrow_back_ios',
                            nextIcon: 'arrow_forward_ios'
                        }">
                    </v-data-table>
                </v-card>

                <v-dialog v-model="dialogAdd"  max-width="870" persistent>
                    <v-card>
                        <v-card-title>
                            <span class="headline">Agregar</span>
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                        label="Name"
                                        :items="markItem">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                        label="Type">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="5">
                                    <v-select
                                        :items="itemsAlterable"
                                        label="Alterable">
                                    </v-select>
                                </v-col>
                                <v-col cols="12" sm="7">
                                    <v-text-field
                                        label="Monitoreo"
                                        prepend-inner-icon="speed">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn
                                @click="dialogAdd = false"
                                dark
                                >
                                Cancelar
                            </v-btn>
                            <v-btn
                                @click="dialogAdd = false"
                                dark
                                color="rgba(57, 42, 192, 0.53)">
                                Agregar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                dialogAdd: false,
                selected: [],
                itemsAlterable: ['Manual', 'Automático', 'Deshabilitado'],
                items: [
                    { _id: 1, name: 'VAR14', type: 'RNC', monitoreo: 'piualarm 01', alterable: 'Manual' },
                    { _id: 2, name: 'TER062', type: 'RNC', monitoreo: 'piualarm 01', alterable: 'Manual' },
                    { _id: 3, name: 'TER062', type: 'RNC', monitoreo: 'piualarm 01', alterable: 'Manual' },
                    { _id: 4, name: 'VAR14', type: 'RNC', monitoreo: 'piualarm 01', alterable: 'Automático' },
                    { _id: 5, name: 'VAR14', type: 'RNC', monitoreo: 'piualarm 02', alterable: 'Automático' },
                    { _id: 6, name: 'NYT19', type: 'RNC', monitoreo: 'piualarm 02', alterable: 'Manual' },
                    { _id: 7, name: 'NYT19', type: 'RNC', monitoreo: 'piualarm 02', alterable: 'Automático' },
                    { _id: 8, name: 'VAR14', type: 'RNC', monitoreo: 'piualarm 03', alterable: 'Manual' },
                    { _id: 9, name: 'TER062', type: 'RNC', monitoreo: 'piualarm 03', alterable: 'Deshabilitado' },
                    { _id: 10, name: 'NYT19', type: 'RNC', monitoreo: 'piualarm 03', alterable: 'Automático' },
                ],
                headers:[
                    { text: 'Name', value: 'name' },
                    { text: 'Type', value: 'type' },
                    { text: 'Monitoreo', value: 'monitoreo' },
                    { text: 'Alterable', value: 'alterable' }
                ]
            }
        }
    }
</script>