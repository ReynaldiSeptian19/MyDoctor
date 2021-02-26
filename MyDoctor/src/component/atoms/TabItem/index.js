import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {
        IconDoctor, 
        IconMessage, 
        IconHospital, 
        IconDoctorActive, 
        IconHospitalActive, 
        IconMessageActive
} from '../../../assets'
import {colors, fonts} from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () =>{
        if(title === 'Doctor'){
            return(
                active ? <IconDoctorActive/> : <IconDoctor/>
            )
        }
        if(title === 'Messages'){
            return(
                active ? <IconMessageActive/> : <IconMessage/>
            )
        }
        if(title === 'Hospitals'){
            return(
                active? <IconHospitalActive/> : <IconHospital/>
            )
        }
        return <IconDoctor/>
    }   
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container :{
        alignItems: 'center'
    },
    text: (active) =>({
        color: active? colors.text.menuActive : colors.text.menuInactive,
        fontFamily: fonts.primary[600],
        marginTop: 4 
    })
})