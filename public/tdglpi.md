# Installation de GLPI

## Introduction

Ce guide vous expliquera comment installer GLPI sur un serveur Debian/Ubuntu. GLPI est une application open-source de gestion des services informatiques (ITSM).

## Prérequis

- Un serveur avec une distribution Debian/Ubuntu.
- Accès root ou sudo.
- Un serveur web (Apache), PHP et une base de données (MySQL/MariaDB).

## Étape 1 : Installation des paquets nécessaires

### Mise à jour du système

Mettez à jour la liste des paquets disponibles et installez les mises à jour :

```bash
sudo apt update
sudo apt upgrade
```

### Installation d'Apache, PHP et MySQL/MariaDB

Installez Apache, PHP et MySQL/MariaDB avec les extensions PHP nécessaires :

```bash
sudo apt install apache2 php libapache2-mod-php php-mysql php-xml php-mbstring php-curl php-gd php-intl php-ldap php-apcu mariadb-server
```

### Démarrage des services

Assurez-vous que les services Apache et MySQL/MariaDB sont démarrés et activés :

```bash
sudo systemctl start apache2
sudo systemctl enable apache2
sudo systemctl start mariadb
sudo systemctl enable mariadb
```

## Étape 2 : Configuration de la base de données

### Sécurisation de MySQL/MariaDB

Exécutez le script de sécurisation pour configurer le mot de passe root et sécuriser l'installation :

```bash
sudo mysql_secure_installation
```

### Création de la base de données et de l'utilisateur

Connectez-vous à MySQL/MariaDB et créez une base de données et un utilisateur pour GLPI :

```bash
sudo mysql -u root -p
```

Dans le shell MySQL, exécutez les commandes suivantes :

```sql
CREATE DATABASE glpi;
CREATE USER 'glpiuser'@'localhost' IDENTIFIED BY 'mot_de_passe';
GRANT ALL PRIVILEGES ON glpi.* TO 'glpiuser'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## Étape 3 : Téléchargement et installation de GLPI

### Téléchargement de GLPI

Téléchargez la dernière version de GLPI depuis le site officiel :

```bash
wget https://github.com/glpi-project/glpi/releases/download/9.5.6/glpi-9.5.6.tgz
```

### Extraction de l'archive

Extrayez l'archive téléchargée :

```bash
tar -xvzf glpi-9.5.6.tgz
```

### Déplacement des fichiers

Déplacez les fichiers extraits vers le répertoire web d'Apache :

```bash
sudo mv glpi /var/www/html/
```

### Permissions

Attribuez les permissions appropriées :

```bash
sudo chown -R www-data:www-data /var/www/html/glpi
sudo chmod -R 755 /var/www/html/glpi
```

## Étape 4 : Configuration d'Apache

### Création d'un fichier de configuration pour GLPI

Créez un fichier de configuration pour GLPI dans Apache :

```bash
sudo nano /etc/apache2/sites-available/glpi.conf
```

Ajoutez les lignes suivantes :

```conf:/etc/apache2/sites-available/glpi.conf
<VirtualHost *:80>
    ServerAdmin admin@example.com
    DocumentRoot /var/www/html/glpi
    ServerName example.com

    <Directory /var/www/html/glpi>
        Options FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/glpi_error.log
    CustomLog ${APACHE_LOG_DIR}/glpi_access.log combined
</VirtualHost>
```

### Activation du site et des modules nécessaires

Activez le site GLPI et les modules Apache nécessaires :

```bash
sudo a2ensite glpi.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```

## Étape 5 : Installation via l'interface web

### Accès à l'interface web

Ouvrez un navigateur web et accédez à `http://example.com` (remplacez `example.com` par votre nom de domaine ou adresse IP).

### Suivi de l'assistant d'installation

Suivez les instructions de l'assistant d'installation :

1. Sélectionnez la langue.
2. Acceptez les termes de la licence.
3. Vérifiez les prérequis.
4. Configurez la base de données en utilisant les informations créées précédemment (`glpi`, `glpiuser`, `mot_de_passe`).
5. Finalisez l'installation.

### Suppression du répertoire d'installation

Pour des raisons de sécurité, supprimez le répertoire `install` :

```bash
sudo rm -rf /var/www/html/glpi/install
```

## Conclusion

Vous avez maintenant installé GLPI sur votre serveur. Vous pouvez commencer à configurer et utiliser GLPI pour gérer vos services informatiques. N'oubliez pas de consulter la documentation officielle de GLPI pour des configurations et des personnalisations avancées.

## Qu'est-ce que GLPI ?

## Définition

GLPI (Gestionnaire Libre de Parc Informatique) est une application open-source de gestion des services informatiques (ITSM) qui permet de gérer les ressources informatiques, les incidents, les demandes de service, et bien plus encore.

## Fonctionnalités principales

### Gestion des actifs

- **Inventaire** : GLPI permet de créer un inventaire détaillé des équipements informatiques (ordinateurs, imprimantes, logiciels, etc.).
- **Suivi des actifs** : Suivi des mouvements, des affectations et des historiques des équipements.

### Gestion des incidents et des demandes

- **Tickets** : Système de gestion des tickets pour suivre les incidents et les demandes de service.
- **Priorisation** : Classement des tickets par priorité pour une gestion efficace.
- **SLA (Service Level Agreement)** : Gestion des accords de niveau de service pour garantir des temps de réponse et de résolution.

### Gestion des utilisateurs

- **Annuaire** : Intégration avec des annuaires LDAP pour la gestion des utilisateurs.
- **Permissions** : Système de gestion des rôles et des permissions pour contrôler l'accès aux différentes fonctionnalités.

### Gestion des changements

- **Planification** : Planification et suivi des changements dans l'infrastructure informatique.
- **Validation** : Processus de validation pour approuver les changements avant leur mise en œuvre.

### Rapports et tableaux de bord

- **Rapports** : Génération de rapports détaillés sur les actifs, les tickets, les utilisateurs, etc.
- **Tableaux de bord** : Tableaux de bord personnalisables pour une vue d'ensemble rapide des indicateurs clés.

## Avantages

### Open-source

- **Gratuit** : GLPI est une solution open-source, ce qui signifie qu'elle est gratuite à utiliser et à modifier.
- **Communauté** : Une large communauté de développeurs et d'utilisateurs contribue à l'amélioration continue de l'application.

### Extensible

- **Plugins** : GLPI dispose d'un système de plugins qui permet d'ajouter des fonctionnalités supplémentaires selon les besoins spécifiques.
- **API** : Une API RESTful permet l'intégration avec d'autres systèmes et applications.

### Personnalisable

- **Interface** : Interface utilisateur personnalisable pour s'adapter aux besoins de l'organisation.
- **Formulaires** : Création de formulaires personnalisés pour la collecte d'informations spécifiques.

## Conclusion

GLPI est une solution complète et flexible pour la gestion des services informatiques. Grâce à ses nombreuses fonctionnalités, son extensibilité et sa nature open-source, il est adapté à une large gamme d'organisations, des petites entreprises aux grandes entreprises. En utilisant GLPI, les équipes informatiques peuvent améliorer l'efficacité de la gestion des actifs, des incidents, des demandes et des changements, tout en offrant une meilleure qualité de service aux utilisateurs finaux.
