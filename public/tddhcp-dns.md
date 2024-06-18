# Mise en place d'un réseau DHCP et DNS

## Introduction

Ce guide vous expliquera comment configurer un serveur DHCP et DNS sur un réseau local. Nous utiliserons `isc-dhcp-server` pour le DHCP et `bind9` pour le DNS sur un système basé sur Debian/Ubuntu.

## Prérequis

- Un serveur avec une distribution Debian/Ubuntu.
- Accès root ou sudo.

## Installation des paquets nécessaires

### DHCP

Installez le serveur DHCP avec la commande suivante :

```bash
sudo apt update
sudo apt install isc-dhcp-server
```

Cette commande met à jour la liste des paquets disponibles et installe le serveur DHCP ISC.

### DNS

Installez le serveur DNS avec la commande suivante :

```bash
sudo apt install bind9
```

Cette commande installe le serveur DNS BIND9.

## Configuration du serveur DHCP

### Fichier de configuration principal

Éditez le fichier `/etc/dhcp/dhcpd.conf` :

```bash
sudo nano /etc/dhcp/dhcpd.conf
```

Ce fichier contient les paramètres de configuration du serveur DHCP.

Ajoutez ou modifiez les lignes suivantes :

```conf:/etc/dhcp/dhcpd.conf
# Définir les options globales
option domain-name "example.com";
option domain-name-servers ns1.example.com, ns2.example.com;

# Définir la durée du bail
default-lease-time 600;
max-lease-time 7200;

# Définir le sous-réseau
subnet 192.168.1.0 netmask 255.255.255.0 {
  range 192.168.1.10 192.168.1.100;
  option routers 192.168.1.1;
  option subnet-mask 255.255.255.0;
  option broadcast-address 192.168.1.255;
}
```

- `option domain-name` : Définit le nom de domaine pour le réseau.
- `option domain-name-servers` : Spécifie les serveurs DNS à utiliser.
- `default-lease-time` et `max-lease-time` : Définissent la durée des baux DHCP.
- `subnet` : Définit le sous-réseau et les options associées, comme la plage d'adresses IP, le routeur, le masque de sous-réseau et l'adresse de diffusion.

### Démarrage du service DHCP

Assurez-vous que le service DHCP démarre correctement :

```bash
sudo systemctl restart isc-dhcp-server
sudo systemctl enable isc-dhcp-server
```

- `restart` : Redémarre le service DHCP.
- `enable` : Active le service DHCP pour qu'il démarre automatiquement au démarrage du système.

## Configuration du serveur DNS

### Fichier de configuration principal

Éditez le fichier `/etc/bind/named.conf.options` :

```bash
sudo nano /etc/bind/named.conf.options
```

Ce fichier contient les options de configuration globales pour BIND9.

Ajoutez ou modifiez les lignes suivantes :

```conf:/etc/bind/named.conf.options
options {
  directory "/var/cache/bind";

  // Autoriser les requêtes récursives
  recursion yes;

  // Autoriser les requêtes de ces réseaux
  allow-query { any; };

  // Forwarders
  forwarders {
    8.8.8.8;
    8.8.4.4;
  };

  dnssec-validation auto;

  auth-nxdomain no;    # conform to RFC1035
  listen-on-v6 { any; };
};
```

- `directory` : Spécifie le répertoire de cache pour BIND.
- `recursion` : Permet les requêtes récursives.
- `allow-query` : Autorise les requêtes de tous les réseaux.
- `forwarders` : Spécifie les serveurs DNS vers lesquels les requêtes non résolues localement seront envoyées.
- `dnssec-validation` : Active la validation DNSSEC.
- `auth-nxdomain` : Conformité avec la RFC1035.
- `listen-on-v6` : Écoute sur toutes les interfaces IPv6.

### Configuration de la zone DNS

Éditez le fichier `/etc/bind/named.conf.local` :

```bash
sudo nano /etc/bind/named.conf.local
```

Ce fichier contient les configurations spécifiques aux zones DNS.

Ajoutez les lignes suivantes pour définir une zone DNS :

```conf:/etc/bind/named.conf.local
zone "example.com" {
  type master;
  file "/etc/bind/db.example.com";
};
```

- `zone` : Définit une nouvelle zone DNS.
- `type` : Spécifie que ce serveur est le maître pour cette zone.
- `file` : Indique le fichier de zone contenant les enregistrements DNS.

### Fichier de zone

Créez le fichier de zone `/etc/bind/db.example.com` :

```bash
sudo nano /etc/bind/db.example.com
```

Ce fichier contient les enregistrements DNS pour la zone `example.com`.

Ajoutez les lignes suivantes :

```conf:/etc/bind/db.example.com
$TTL    604800
@       IN      SOA     ns1.example.com. admin.example.com. (
                              2         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL
;
@       IN      NS      ns1.example.com.
@       IN      A       192.168.1.1
ns1     IN      A       192.168.1.1
www     IN      A       192.168.1.1
```

- `$TTL` : Définit le Time-To-Live par défaut pour les enregistrements DNS.
- `SOA` : Spécifie le serveur d'origine et l'adresse email de l'administrateur.
- `NS` : Définit le serveur de noms pour la zone.
- `A` : Associe un nom de domaine à une adresse IP.

### Démarrage du service DNS

Assurez-vous que le service DNS démarre correctement :

```bash
sudo systemctl restart bind9
sudo systemctl enable bind9
```

- `restart` : Redémarre le service DNS.
- `enable` : Active le service DNS pour qu'il démarre automatiquement au démarrage du système.

## Vérification de la configuration

### DHCP

Pour vérifier que le serveur DHCP fonctionne correctement, utilisez la commande suivante :

```bash
sudo systemctl status isc-dhcp-server
```

Cette commande affiche l'état du service DHCP.

### DNS

Pour vérifier que le serveur DNS fonctionne correctement, utilisez la commande suivante :

```bash
sudo systemctl status bind9
```

Cette commande affiche l'état du service DNS.

Vous pouvez également tester la résolution DNS avec `dig` :

```bash
dig @localhost example.com
```

Cette commande interroge le serveur DNS local pour résoudre le nom de domaine `example.com`.

## Conclusion

## Qu'est-ce que le DHCP et le DNS ?

## DHCP (Dynamic Host Configuration Protocol)

### Définition

Le DHCP est un protocole réseau utilisé pour attribuer automatiquement des adresses IP et d'autres informations de configuration réseau aux appareils sur un réseau local (LAN).

### Fonctionnement

1. **Découverte** : Un appareil (client DHCP) envoie une requête DHCPDISCOVER pour trouver un serveur DHCP.
2. **Offre** : Le serveur DHCP répond avec une offre DHCPOFFER contenant une adresse IP et d'autres paramètres réseau.
3. **Demande** : Le client répond avec une requête DHCPREQUEST pour accepter l'offre.
4. **Accusé de réception** : Le serveur envoie un DHCPACK pour confirmer l'attribution de l'adresse IP.

### Avantages

- **Automatisation** : Réduit la nécessité de configurer manuellement chaque appareil.
- **Gestion centralisée** : Permet une gestion centralisée des adresses IP.
- **Flexibilité** : Facilite l'ajout et le retrait d'appareils sur le réseau.

## DNS (Domain Name System)

### Définition

Le DNS est un système qui traduit les noms de domaine lisibles par l'homme (comme `example.com`) en adresses IP (comme `192.168.1.1`) que les ordinateurs utilisent pour identifier et localiser les appareils sur un réseau.

### Fonctionnement

1. **Requête DNS** : Lorsqu'un utilisateur entre un nom de domaine dans un navigateur, une requête DNS est envoyée à un serveur DNS.
2. **Résolution** : Le serveur DNS recherche l'adresse IP associée au nom de domaine dans sa base de données.
3. **Réponse** : Le serveur DNS renvoie l'adresse IP au client, permettant ainsi la connexion au serveur web correspondant.

### Types d'enregistrements DNS

- **A (Address)** : Associe un nom de domaine à une adresse IPv4.
- **AAAA** : Associe un nom de domaine à une adresse IPv6.
- **CNAME (Canonical Name)** : Alias pour un autre nom de domaine.
- **MX (Mail Exchange)** : Spécifie les serveurs de messagerie pour un domaine.
- **NS (Name Server)** : Indique les serveurs DNS pour un domaine.

### Avantages

- **Facilité d'utilisation** : Permet aux utilisateurs de se souvenir de noms de domaine faciles à lire plutôt que d'adresses IP numériques.
- **Scalabilité** : Peut gérer des millions de noms de domaine et d'adresses IP.
- **Redondance** : Utilise plusieurs serveurs pour assurer la disponibilité et la fiabilité.

## Conclusion

Le DHCP et le DNS sont des composants essentiels des réseaux modernes. Le DHCP simplifie la gestion des adresses IP en les attribuant automatiquement aux appareils, tandis que le DNS facilite la navigation sur Internet en traduisant les noms de domaine en adresses IP. Ensemble, ils permettent une gestion efficace et une utilisation conviviale des réseaux.
