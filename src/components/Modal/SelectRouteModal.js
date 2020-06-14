import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Modal } from 'react-native';

export default class SelectRouteModal extends React.Component {
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                }}>
                <View style={styles.modal}>
                    <View style={styles.modalHeader}>
                        <Text>{this.props.text}</Text>
                        <TouchableOpacity onPress={() => this.props.setModalVisible(false)}>
                            <Text style={styles.textCloseModal}>TESTE</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
    textCloseModal: {
        color: 'red'
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    }
});