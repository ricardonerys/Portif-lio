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
			<Text style={styles.title}>Jogo da Forca</Text>
			<Text style={styles.subtitle}>games</Text>

			<View style={styles.forcaBox}>
				<Text style={styles.info}>Tentativas restantes: {Math.max(0, maxErros - erros)}</Text>
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
		alignItems: 'center'
	},
	title: {
		fontSize: 22,
		fontWeight: '700'
	},
	subtitle: {
		fontSize: 14,
		color: '#666',
		marginBottom: 8
	},
	forcaBox: {
		marginVertical: 8,
		alignItems: 'center'
	},
	info: {
		fontSize: 16
	},
	palavra: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginVertical: 12
	},
	letra: {
		fontSize: 24,
		marginHorizontal: 6
	},
	inputArea: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 8,
		width: 60,
		textAlign: 'center',
		marginRight: 8,
		borderRadius: 6
	},
	button: {
		backgroundColor: '#2575fc',
		paddingHorizontal: 12,
		paddingVertical: 10,
		borderRadius: 6
	},
	buttonText: {
		color: '#fff',
		fontWeight: '600'
	},
	painelLetras: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginTop: 12
	},
	painelCol: {
		flex: 1,
		alignItems: 'center'
	},
	painelTitle: {
		fontWeight: '700'
	},
	painelContent: {
		marginTop: 4
	},
	msg: {
		marginTop: 12,
		fontSize: 16
	}
,
	keyboardHint: {
		marginVertical: 8,
		color: '#333'
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
		backgroundColor: '#f0f0f0',
		alignItems: 'center',
		justifyContent: 'center'
	},
	keyDisabled: {
		backgroundColor: '#cfcfcf'
	},
	keyText: {
		fontWeight: '700'
	},
	keyTextDisabled: {
		color: '#777'
	}
});
