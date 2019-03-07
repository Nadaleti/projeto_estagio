# =============================== Jogos ===============================
insert into jogo values (null, '1990', 'Fire Emblem: Shadow Dragon and the Blade of Light', 'Famicom'),
						(null, '1992', 'Fire Emblem Gaiden', 'Famicom'),
                        (null, '1994', 'Fire Emblem: Mystery of the Emblem', 'Super Nintendo'),
                        (null, '1996', 'Fire Emblem: Genealogy of the Holy War', 'Super Nintendo'),
                        (null, '1999', 'Fire Emblem: Thracia 776', 'Super Nintendo'),
                        (null, '2002', 'Fire Emblem: The Binding Blade', 'Game Boy Advance'),
                        (null, '2003', 'Fire Emblem: The Blazing Blade', 'Game Boy Advance'),
                        (null, '2004', 'Fire Emblem: The Sacred Stones', 'Game Boy Advance'),
                        (null, '2005', 'Fire Emblem: Path of Radiance', 'Nintendo GameCube'),
                        (null, '2007', 'Fire Emblem: Radiant Dawn', 'Wii'),
                        (null, '2008', 'Fire Emblem: Shadow Dragon', 'Nintendo DS'),
                        (null, '2010', 'Fire Emblem: New Mystery of the Emblem - Heroes of Light and Shadow', 'Nintendo DS'),
                        (null, '2012', 'Fire Emblem Awakening', 'Nintendo 3DS'),
                        (null, '2015', 'Fire Emblem 0: Cipher', 'TCG'),
                        (null, '2015', 'Fire Emblem Fates', 'Nintendo 3DS'),
                        (null, '2017', 'Fire Emblem: Heroes', 'Android/iOS'),
                        (null, '2017', 'Fire Emblem Echoes: Shadows of Valentia', 'Nintendo 3DS'),
                        (null, '2019', 'Fire Emblem: Three Houses', 'Nintendo Switch');

# =============================== Jogadores ===============================
insert into jogador values (null, '300', 'SirOnerb', '0', 'masculino'),
						   (null, '300', 'BlueMorii', '0', 'masculino'),
                           (null, '300', 'Nadaletsky', '0', 'masculino'),
                           (null, '300', 'MikeFile', '0', 'masculino'),
                           (null, '300', 'Sbrugnera', '0', 'masculino'),
                           (null, '300', 'Ferboralli', '0', 'feminino'),
                           (null, '300', 'pankeka91', '0', 'masculino'),
                           (null, '300', 'Marisa', '0', 'feminino'),
                           (null, '300', 'Miola', '0', 'masculino'),
                           (null, '300', 'GiBlasco', '0', 'feminino');
                           
# =============================== Herois ===============================
# (null, alcunha, atk, classe, def, hp, img, movimentacao, nome, res, spd)
insert into heroi values
(null, 'Anima Child', '35', 'Green Mage', '17', '37', 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2019-03/Luth-Atk.png', 'Infantry', 'Lugh', '31', '36'),
(null, 'Young Lion', '30', 'Sword', '25', '44', 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2017-01/Roy.png', 'Infantry', 'Roy', '28', '31'),
(null, 'Brave Lion', '32', 'Sowrd', '26', '38', 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2017-08/roy-cyl-norm.png', 'Cavalry', 'Brave Roy', '26', '34'),
(null, 'Youthful Gifts', '35', 'Colorless Bow', '27', '34', 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2018-02/I68aa5l.png', 'Cavalry', 'Roy', '30', '19'),
(null, 'Blazing Lion', '34', 'Sword', '32', '39', 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2019-02/1%20-%20NxR0Gb9.png', 'Infantry', 'Legendary Roy', '26', '38'),
(null, 'Spooky Monster', '38', 'Red Dragon', '40', '46', 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2018-10/DlvdYg9.png', 'Armored', 'Halloween Myrrh', '32', '23'),
(null, 'Brave Princess', '32', 'Staff', '21', '36', 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2018-08/Brave%20Veronica%20norm.png', 'Cavalry', 'Brave Veronica', '19', '36'),
(null, 'Lad from Afar', '33', 'Red Mage', '20', '37', 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2018-03/zxSXrcv.png', 'Infantry', 'Morgan', '26', '34'),
(null, 'Lass from afar', '37', 'Blue Mage', '19', '41', 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2018-03/OQOLeZJ.png', 'Flying', 'Morgan', '36', '33'),
(null, 'Middle Whitewing', '31', 'Lance', '29', '39', 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2017-08/BtlFace_15.png', 'Flying', 'Catria', '25', '34'),
(null, 'Delightful Noble', '37', 'Red Mage', '19', '35', 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2017-08/Full_Attack_Lilina.png', 'Infantry', 'Lilina', '31', '25'),
(null, 'Nabata Prophet', '33', 'Red Mage', '28', '40', 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2017-02/Full_Portrait_Sophia.png', 'Infantry', 'Sophia', '29', '19'),
(null, 'Inveterate Soldier', '32', 'Axe', '33', '43', 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2017-02/Full_Portrait_Gunter.png', 'Cavalry', 'Gunter', '18', '24'),
(null, 'Focused Samurai', '35', 'Sword', '26', '37', 'https://fireemblem.gamepress.gg/sites/fireemblem/files/2017-08/BtlFace_31.png', 'Infantry', 'Hana', '26', '39');