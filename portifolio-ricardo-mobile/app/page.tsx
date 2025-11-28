import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  const openExternal = (url: string) => Linking.openURL(url);

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/foto.jpeg')}
          style={styles.profilePic}
          accessibilityLabel="Minha foto"
        />

        <Text style={styles.title}>Saudações cordiais, eu sou Ricardo Nery</Text>

        <Text style={styles.subtitle}>
          Graduando em Ciencia da computacao, Técnico em eletrotécnica e apaixonado por dubstep. Este é meu portfólio.
        </Text>
      </View>

      <View style={styles.main}>
        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>

          <View style={styles.skills}>
            <Text style={styles.skillItem}>java/python/c</Text>
            <Text style={styles.skillItem}>Robótica / Automação</Text>
            <Text style={styles.skillItem}>HTML / CSS</Text>
            <Text style={styles.skillItem}>Arduino</Text>
            <Text style={styles.skillItem}>Git / GitHub</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Projetos</Text>
          <View style={styles.projects}>
            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>Projeto barco</Text>
              <Text style={styles.projectDesc}>barco autonomo desenvolido para analize de agua e batimetria</Text>
              <TouchableOpacity onPress={() => openExternal('https://g1.globo.com/pe/pernambuco/ne2/video/pesquisadores-da-unicap-desenvolvem-barco-para-medir-qualidade-da-agua-dos-rios-12947765.ghtml')}>
                <Text style={styles.link}>Acessar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>Vitrina</Text>
              <Text style={styles.projectDesc}>Este projeto tem como objetivo promover a indústria criativa e sustentável em espaços urbanos.</Text>
              <TouchableOpacity onPress={() => openExternal('https://github.com/Williansilva2207/Vitrina')}>
                <Text style={styles.link}>Ver no GitHub</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>Jogo da Forca</Text>
              <Text style={styles.projectDesc}>Mini game da forca feito originalmente em React/Next, adaptado para mobile.</Text>
              <Link href="/forca/forca" style={styles.linkInternal}>Jogar agora</Link>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© {new Date().getFullYear()} Ricardo – Todos os direitos reservados</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#2575fc',
    minHeight: '100%'
  },
  header: {
    alignItems: 'center',
    marginBottom: 24
  },
  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.6)',
    marginBottom: 16
  },
  title: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 14,
    color: '#f0f0f0',
    textAlign: 'center'
  },
  main: {
    width: '100%',
    maxWidth: 1000
  },
  section: {
    marginBottom: 24,
    alignItems: 'center'
  },
  heading: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 12
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  skillItem: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    color: '#fff',
    margin: 6
  },
  projects: {
    width: '100%'
  },
  projectCard: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12
  },
  projectTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  projectDesc: {
    color: '#eee',
    marginVertical: 6
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline'
  },
  linkInternal: {
    color: '#fff',
    textDecorationLine: 'underline',
    marginTop: 6
  },
  footer: {
    marginTop: 20,
    alignItems: 'center'
  },
  footerText: {
    color: '#eee',
    fontSize: 12
  }
});
