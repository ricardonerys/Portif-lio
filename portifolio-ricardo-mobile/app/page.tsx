import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  const openExternal = (url: string) => Linking.openURL(url);

  return (
    <LinearGradient
      colors={['#0f1729', '#1a2f4d', '#0f1729']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientContainer}
    >
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
              <TouchableOpacity style={styles.button} onPress={() => openExternal('https://g1.globo.com/pe/pernambuco/ne2/video/pesquisadores-da-unicap-desenvolvem-barco-para-medir-qualidade-da-agua-dos-rios-12947765.ghtml')}>
                <Text style={styles.buttonText}>Acessar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>Vitrina</Text>
              <Text style={styles.projectDesc}>Este projeto tem como objetivo promover a indústria criativa e sustentável em espaços urbanos.</Text>
              <TouchableOpacity style={styles.button} onPress={() => openExternal('https://github.com/Williansilva2207/Vitrina')}>
                <Text style={styles.buttonText}>Ver no GitHub</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.projectCard}>
              <Text style={styles.projectTitle}>Jogo da Forca</Text>
              <Text style={styles.projectDesc}>Mini game da forca feito originalmente em React/Next, adaptado para mobile.</Text>
              <Link href="/forca/forca" asChild>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Jogar agora</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© {new Date().getFullYear()} Ricardo – Todos os direitos reservados</Text>
      </View>
    </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1
  },
  page: {
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
    minHeight: '100%'
  },
  header: {
    alignItems: 'center',
    marginBottom: 32
  },
  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#00d9ff',
    marginBottom: 20,
    shadowColor: '#00d9ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10
  },
  title: {
    fontSize: 26,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: '700'
  },
  subtitle: {
    fontSize: 14,
    color: '#b0c4de',
    textAlign: 'center',
    lineHeight: 20
  },
  main: {
    width: '100%',
    maxWidth: 1000
  },
  section: {
    marginBottom: 32,
    alignItems: 'center'
  },
  heading: {
    fontSize: 22,
    color: '#00d9ff',
    marginBottom: 16,
    fontWeight: '700',
    letterSpacing: 0.5
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8
  },
  skillItem: {
    backgroundColor: 'rgba(0, 217, 255, 0.1)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    color: '#00d9ff',
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.3)',
    fontWeight: '600',
    fontSize: 13
  },
  projects: {
    width: '100%'
  },
  projectCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 217, 255, 0.2)',
    shadowColor: '#00d9ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8
  },
  projectTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8
  },
  projectDesc: {
    color: '#b0c4de',
    marginVertical: 10,
    lineHeight: 20,
    fontSize: 13
  },
  button: {
    backgroundColor: '#00d9ff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 14,
    alignItems: 'center',
    shadowColor: '#00d9ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5
  },
  buttonText: {
    color: '#0f1729',
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 0.5
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
    marginTop: 32,
    alignItems: 'center',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 217, 255, 0.1)'
  },
  footerText: {
    color: '#6b7f9f',
    fontSize: 12,
    letterSpacing: 0.3
  }
});
