import React, { useState, useEffect } from 'react';
import { Image, View, Platform, Modal, StyleSheet, TextInput, FlatList, Text } from 'react-native';
import axios from 'axios';
import { Surface } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { Button, InputText, ImagePicker, TakePhoto } from '../utils/Library';

const CreatePost = () => {
  const [images, setImages] = useState([]); // Para almacenar las imágenes seleccionadas
  
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    images: [], // Utiliza un arreglo para las imágenes
    /* videos: [], */
    /* arrival_order:[], */
    active: false
  });

  const ip = "192.168.101.63";

  const handleCreatePost = () => {
    const formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("description", newPost.description);

    // Agrega las imágenes seleccionadas al formulario
    newPost.images.forEach((uri, index) => {
      formData.append("images", {
        uri: uri,
        type: "image/jpeg",
        name: "images.jpg",
      });
    });
    console.log("Post: ", formData);
    const url = `http://${ip}:3500/api/v1/posts`;

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("Data new post: ", data);
        navigation.navigate("PostsUser");
        setModalVisible(false);
        setImages([]);
      })
      .catch(error => {
        console.log(error);
      });

  }

  const handleDeletePost = (postId) => {
    console.log("Post ID: ", postId);
    const updatePosts = postList.filter((post) => post._id !== postId);
    setPostList(updatePosts);

    axios
      .delete(`http://${ip}:3500/api/v1/posts/${postId}`)
      .then(response => {
        console.log("Data delete post: ", response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleImageSelection = (selectedImages) => {
    if (selectedImages) {
      const imagesUris = selectedImages.map((image) => image.uri);
      setNewPost({ ...newPost, images: imagesUris });
      setImages(selectedImages);
    }
  };



  return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'space-between' }}>
      {/* <View style={{ flex: 1 }}>

        <FlatList
          data={postList}
          columnWrapperStyle={{ flexWrap: 'wrap', flex: 1, justifyContent: 'center' }}
          numColumns={25}
          style={{ margin: 5 }}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <Surface elevation={4} style={styles.card}>
              {item.images.map((imagesUri, index) => (
                <Image
                  key={index} // Asegúrate de proporcionar una clave única para cada imagen
                  source={{ uri: `http://${ip}:3500/${imagesUri}` }}
                  style={{ width: 100, height: 100, borderRadius: 50, margin: 5 }}
                />
              ))}
              <Text style={[styles.cardText, styles.cardTitle]}>{item.title}</Text>
              <Text style={styles.cardText}>{item.description}</Text>
              <Text style={styles.cardText}>{item.active ? "Activo" : "Inactivo"}</Text>
              <Button
                text="Delete"
                onPressAction={() => handleDeletePost(item._id.toString())}
              />
            </Surface>
          )}
        >

        </FlatList>

      </View> */}
      {/* <Button
        onPressAction={() => setModalVisible(true)}
        text="Add Post"
      /> */}

      {/* <View> */}

        {/* <Modal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          animationType='slide'
        > */}
          <View style={styles.modalContainer}>
            <TextInput
              placeholder="Title"
              style={styles.input}
              onChangeText={(title_text) => {
                console.log(title_text)
                setNewPost({ ...newPost, title: title_text })
              }}
            />

            <TextInput
              placeholder="Description"
              style={styles.input}
              onChangeText={(description_text) => {
                console.log(description_text)
                setNewPost({ ...newPost, description: description_text })
              }}
            />

            <ImagePicker onImageSelect={handleImageSelection} />
            <TakePhoto onImageSelect={handleImageSelection} />

            {/* {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />} */}
            {images && images.length > 0 && (
              <FlatList
                data={images}
                horizontal
                keyExtractor={(item) => item.uri}
                renderItem={({ item }) => (
                  <Image
                    source={{ uri: item.uri }}
                    style={{ width: 100, height: 100, margin: 5 }}
                  />
                )}
              />
            )}
            <Button
              text='Create'
              onPressAction={handleCreatePost}
            />
          </View>
        {/* </Modal> */}
      {/* </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
      height: 40,
      width: 300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
    },
  modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
  },
  card: {
      backgroundColor: '#E6EAE8',
      justifyContent: "center",
      alignItems: "center",
      margin: 5,
      padding: 10,
      borderRadius: 5
    } ,
  cardText: {
      flex: 1,
      flexWrap: 'wrap' ,
      width: 350,
      textAlign: 'center',
      marginBottom: 5,
      fontSize: 15,
    } ,
  cardTitle: {
      fontWeight: 'bold',
      fontSize: 18,
    },
  button: {
      color : "#841584"
  }
})

export default CreatePost
