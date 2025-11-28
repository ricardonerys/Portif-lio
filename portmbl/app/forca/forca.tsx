import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const palavras = [
	'minecraft','fortnite','valorant','overwatch','tekken','celeste','pokemon','diablo','starcraft','dota','halo','quake','doom','bioshock','halfLife','portal','terraria','roblox','splatoon','bayonetta','metroid','cuphead','banjo','spyro','rayman','katamari','chrono','fez','journey','limbo'
];

const maxErros = 6;

export default function Forca() {
	const [palavra, setPalavra] = useState('');
	const [letrasTentadas, setLetrasTentadas] = useState<string[]>([]);
	const [erros, setErros] = useState(0);

	useEffect(() => {
		novoJogo();
	}, []);

	function novoJogo() {
		const rand = Math.floor(Math.random() * palavras.length);
		setPalavra(palavras[rand].toLowerCase());
		setLetrasTentadas([]);
		setErros(0);
	}

	function tentarLetra(letra: string) {
		const l = letra.toLowerCase();
		if (!l || l.length !== 1 || !/[a-z]/.test(l)) return;

		if (!letrasTentadas.includes(l)) {
			setLetrasTentadas((prev) => [...prev, l]);
			if (!palavra.includes(l)) setErros((prev) => prev + 1);
		}
	}

	const venceu = palavra && palavra.split('').every((l) => letrasTentadas.includes(l));
	const perdeu = erros >= maxErros;

	const corretas = letrasTentadas.filter((l) => palavra.includes(l));
	const erradas = letrasTentadas.filter((l) => !palavra.includes(l));

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.titleSpace} />
			
			<Text style={styles.title}>Jogo da Forca</Text>
			<Text style={styles.subtitle}>games</Text>

			<View style={styles.forcaContainer}>
				<View style={styles.hangman}>
					{/* Base da forca */}
					<View style={styles.base} />
					
					{/* Poste vertical */}
					<View style={styles.pole} />
					
					{/* Barra horizontal */}
					<View style={styles.beam} />
					
					{/* Corda */}
					{erros > 0 && <View style={styles.rope} />}
					
					{/* Cabeça */}
					{erros > 0 && <View style={styles.head} />}
					
					{/* Corpo */}
					{erros > 1 && <View style={styles.body} />}
					
					{/* Braço esquerdo */}
					{erros > 2 && <View style={styles.armLeft} />}
					
					{/* Braço direito */}
					{erros > 3 && <View style={styles.armRight} />}
					
					{/* Perna esquerda */}
					{erros > 4 && <View style={styles.legLeft} />}
					
					{/* Perna direita */}
					{erros > 5 && <View style={styles.legRight} />}
				</View>
				
				<Text style={styles.info}>Erros: {erros}/{maxErros}</Text>
			</View>

			<View style={styles.palavra}>
				{palavra && palavra.split('').map((letra, i) => (
					<Text key={i} style={styles.letra}>
						{corretas.includes(letra) || venceu || perdeu ? letra.toUpperCase() : '_'}
					</Text>
				))}
			</View>

			{!venceu && !perdeu && (
				<>
					<Text style={styles.keyboardHint}>Toque nas letras abaixo</Text>
					<View style={styles.keyboard}>
						{'abcdefghijklmnopqrstuvwxyz'.split('').map((ch) => {
							const disabled = letrasTentadas.includes(ch);
							return (
								<TouchableOpacity
									key={ch}
									onPress={() => tentarLetra(ch)}
									disabled={disabled}
									style={[styles.key, disabled && styles.keyDisabled]}
								>
									<Text style={[styles.keyText, disabled && styles.keyTextDisabled]}>{ch.toUpperCase()}</Text>
								</TouchableOpacity>
							);
						})}
					</View>
				</>
			)}

			<View style={styles.painelLetras}>
				<View style={styles.painelCol}>
					<Text style={styles.painelTitle}>✅ Corretas</Text>
					<Text style={styles.painelContent}>{corretas.length ? corretas.join(', ').toUpperCase() : '—'}</Text>
				</View>
				<View style={styles.painelCol}>
					<Text style={styles.painelTitle}>❌ Erradas</Text>
					<Text style={styles.painelContent}>{erradas.length ? erradas.join(', ').toUpperCase() : '—'}</Text>
				</View>
			</View>

			{venceu && <Text style={styles.msg}>🎉 Parabéns! Você venceu! A palavra era {palavra.toUpperCase()}.</Text>}
			{perdeu && <Text style={styles.msg}>😢 Você perdeu! A palavra era {palavra.toUpperCase()}.</Text>}

			{(venceu || perdeu) && (
				<TouchableOpacity style={[styles.button, { marginTop: 12 }]} onPress={novoJogo}>
					<Text style={styles.buttonText}>Reiniciar</Text>
				</TouchableOpacity>
			)}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
		alignItems: 'center',
		backgroundColor: '#1e3c72',
		minHeight: '100%'
	},
	titleSpace: {
		height: 40
	},
	title: {
		fontSize: 24,
		fontWeight: '700',
		marginBottom: 4,
		color: '#fff'
	},
	subtitle: {
		fontSize: 14,
		color: '#b0c4de',
		marginBottom: 16
	},
	forcaContainer: {
		alignItems: 'center',
		marginVertical: 16,
		position: 'relative'
	},
	hangman: {
		width: 160,
		height: 180,
		position: 'relative',
		marginBottom: 12,
		borderColor: '#fff',
		borderWidth: 2,
		borderRadius: 8,
		backgroundColor: '#e8f0f7'
	},
	base: {
		position: 'absolute',
		left: 10,
		bottom: 10,
		width: 100,
		height: 6,
		backgroundColor: '#333',
		borderRadius: 3
	},
	pole: {
		position: 'absolute',
		left: 20,
		top: 10,
		width: 6,
		height: 140,
		backgroundColor: '#333',
		borderRadius: 3
	},
	beam: {
		position: 'absolute',
		left: 20,
		top: 10,
		width: 90,
		height: 6,
		backgroundColor: '#333',
		borderRadius: 3
	},
	rope: {
		position: 'absolute',
		left: 106,
		top: 16,
		width: 2,
		height: 30,
		backgroundColor: '#666'
	},
	head: {
		position: 'absolute',
		left: 95,
		top: 46,
		width: 24,
		height: 24,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: '#333'
	},
	body: {
		position: 'absolute',
		left: 105,
		top: 70,
		width: 4,
		height: 30,
		backgroundColor: '#333',
		borderRadius: 2
	},
	armLeft: {
		position: 'absolute',
		left: 85,
		top: 80,
		width: 20,
		height: 4,
		backgroundColor: '#333',
		borderRadius: 2
	},
	armRight: {
		position: 'absolute',
		left: 109,
		top: 80,
		width: 20,
		height: 4,
		backgroundColor: '#333',
		borderRadius: 2
	},
	legLeft: {
		position: 'absolute',
		left: 100,
		top: 100,
		width: 4,
		height: 24,
		backgroundColor: '#333',
		borderRadius: 2
	},
	legRight: {
		position: 'absolute',
		left: 110,
		top: 100,
		width: 4,
		height: 24,
		backgroundColor: '#333',
		borderRadius: 2
	},
	info: {
		fontSize: 16,
		fontWeight: '600',
		color: '#fff'
	},
	palavra: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginVertical: 12,
		backgroundColor: 'rgba(255,255,255,0.1)',
		paddingVertical: 12,
		paddingHorizontal: 8,
		borderRadius: 8
	},
	letra: {
		fontSize: 28,
		marginHorizontal: 6,
		color: '#fff',
		fontWeight: '600'
	},
	keyboardHint: {
		marginVertical: 12,
		color: '#b0c4de',
		fontSize: 14
	},
	keyboard: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginVertical: 6,
		width: '100%'
	},
	key: {
		width: 36,
		height: 44,
		margin: 4,
		borderRadius: 6,
		backgroundColor: '#00d9ff',
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 3
	},
	keyDisabled: {
		backgroundColor: '#4a5f7f'
	},
	keyText: {
		fontWeight: '700',
		color: '#1e3c72',
		fontSize: 14
	},
	keyTextDisabled: {
		color: '#b0c4de'
	},
	painelLetras: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginTop: 16,
		gap: 12
	},
	painelCol: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'rgba(255,255,255,0.1)',
		paddingVertical: 12,
		paddingHorizontal: 8,
		borderRadius: 8
	},
	painelTitle: {
		fontWeight: '700',
		color: '#fff',
		fontSize: 14
	},
	painelContent: {
		marginTop: 6,
		color: '#b0c4de',
		fontSize: 12
	},
	msg: {
		marginTop: 16,
		fontSize: 16,
		color: '#00d9ff',
		fontWeight: '600',
		backgroundColor: 'rgba(0,217,255,0.1)',
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 8,
		textAlign: 'center'
	},
	button: {
		backgroundColor: '#00d9ff',
		paddingHorizontal: 24,
		paddingVertical: 12,
		borderRadius: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 3
	},
	buttonText: {
		color: '#1e3c72',
		fontWeight: '700',
		fontSize: 16
	}
});
