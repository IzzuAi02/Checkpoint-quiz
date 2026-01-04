import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Which of the following is an identity acquisition method that allows a Security Gateway to identify Active Directory users and computers?",
    options: [
      { id: 'A', text: "Active Directory Query" },
      { id: 'B', text: "User Directory Query" },
      { id: 'C', text: "Account Unit Query" },
      { id: 'D', text: "UserCheck" }
    ],
    correctAnswer: "A",
    explanation: "Active Directory Query is an identity acquisition method that allows a Security Gateway to identify Active Directory users and computers. It enables the Security Gateway to query the Active Directory Domain Controllers for user and computer information, such as IP addresses, group memberships, and login events.",
    reference: "Check Point R81 Identity Awareness Administration Guide, page 14."
  },
  {
    id: 2,
    text: "What are two basic rules Check Point recommending for building an effective security policy?",
    options: [
      { id: 'A', text: "Accept Rule and Drop Rule" },
      { id: 'B', text: "Cleanup Rule and Stealth Rule" },
      { id: 'C', text: "Explicit Rule and Implied Rule" },
      { id: 'D', text: "NAT Rule and Reject Rule" }
    ],
    correctAnswer: "B",
    explanation: "Two basic rules that Check Point recommends for building an effective security policy are Cleanup Rule and Stealth Rule. A Cleanup Rule is a rule that is placed at the end of the rule base and drops or logs any traffic that does not match any of the previous rules. A Stealth Rule is a rule that is placed at the top of the rule base and protects the Security Gateway from direct access by unauthorized users.",
    reference: "Check Point R81 Security Management Administration Guide"
  },
  {
    id: 3,
    text: "In Unified SmartConsole Gateways and Servers tab you can perform the following functions EXCEPT ________.",
    options: [
      { id: 'A', text: "Upgrade the software version" },
      { id: 'B', text: "Open WebUI" },
      { id: 'C', text: "Open SSH" },
      { id: 'D', text: "Open service request with Check Point Technical Support" }
    ],
    correctAnswer: "C",
    explanation: "The function that can NOT be performed in the Unified SmartConsole Gateways and Servers tab is Open SSH. SSH is a secure shell protocol that allows remote access to a device via command line interface. The Unified SmartConsole does not provide an option to open SSH from the Gateways and Servers tab, as it is not a graphical user interface.",
    reference: "QUANTUM SECURITY MANAGEMENT R81"
  },
  {
    id: 4,
    text: "Which of the following is considered a 'Subscription Blade', requiring renewal every 1-3 years?",
    options: [
      { id: 'A', text: "IPS blade" },
      { id: 'B', text: "IPSEC VPN Blade" },
      { id: 'C', text: "Identity Awareness Blade" },
      { id: 'D', text: "Firewall Blade" }
    ],
    correctAnswer: "A",
    explanation: "IPS blade is considered a 'Subscription Blade', requiring renewal every 1-3 years. The IPS blade requires a subscription license that includes updates for the IPS signatures and Geo Protection database. Other subscription blades include Anti-Bot, Anti-Virus, URL Filtering, Application Control, Threat Emulation, and Threat Extraction.",
    reference: "Check Point Licensing and Contract Operations User Guide"
  },
  {
    id: 5,
    text: "If there are two administrators logged in at the same time to the SmartConsole, and there are objects locked for editing, what must be done to make them available to other administrators? Choose the BEST answer",
    options: [
      { id: 'A', text: "Save and install the Policy" },
      { id: 'B', text: "Delete older versions of database" },
      { id: 'C', text: "Revert the session." },
      { id: 'D', text: "Publish or discard the session" }
    ],
    correctAnswer: "D",
    explanation: "If there are two administrators logged in at the same time, the administrator who locked the objects must publish or discard the session to make them available. Publishing or discarding the session will save or discard the changes and unlock the objects.",
    reference: "Check Point R81 Security Management Administration Guide, page 18."
  },
  {
    id: 6,
    text: "Which of the following is NOT a valid application navigation tab in the R80 SmartConsole?",
    options: [
      { id: 'A', text: "Manage and Command Line" },
      { id: 'B', text: "Logs and Monitor" },
      { id: 'C', text: "Security Policies" },
      { id: 'D', text: "Gateway and Servers" }
    ],
    correctAnswer: "A",
    explanation: "Manage and Command Line is not a valid application navigation tab. The R80 SmartConsole has four primary tabs: Security Policies, Logs & Monitor, Gateways & Servers, and Manage & Settings. The Command Line Interface button is located in the system information area.",
    reference: "Application Control and URL Filtering - Check Point Software"
  },
  {
    id: 7,
    text: "What are the two elements of address translation rules?",
    options: [
      { id: 'A', text: "Original packet and translated packet" },
      { id: 'B', text: "Manipulated packet and original packet" },
      { id: 'C', text: "Translated packet and untranslated packet" },
      { id: 'D', text: "Untranslated packet and manipulated packet" }
    ],
    correctAnswer: "A",
    explanation: "Address translation rules have two elements: original packet and translated packet. The original packet is the packet before it undergoes address translation, and the translated packet is the packet after it undergoes address translation.",
    reference: "Check Point NAT Methods"
  },
  {
    id: 8,
    text: "What default layers are included when creating a new policy layer?",
    options: [
      { id: 'A', text: "Application Control, URL Filtering and Threat Prevention" },
      { id: 'B', text: "Access Control, Threat Prevention and HTTPS Inspection" },
      { id: 'C', text: "Firewall, Application Control and IPSec VPN" },
      { id: 'D', text: "Firewall, Application Control and IPS" }
    ],
    correctAnswer: "B",
    explanation: "The default layers included when creating a new policy layer are Access Control, Threat Prevention, and HTTPS Inspection. Access Control defines basic firewall rules, Threat Prevention enables protection against attacks like IPS/Anti-Bot, and HTTPS Inspection allows encrypted traffic inspection.",
    reference: "Check Point R81 Administration Guide"
  },
  {
    id: 9,
    text: "Which of the following situations would not require a new license to be generated and installed?",
    options: [
      { id: 'A', text: "The Security Gateway is upgraded." },
      { id: 'B', text: "The existing license expires." },
      { id: 'C', text: "The license is upgraded." },
      { id: 'D', text: "The IP address of the Security Management or Security Gateway has changed." }
    ],
    correctAnswer: "A",
    explanation: "Upgrading the Security Gateway software version does not require a new license. Licenses are tied to the IP address or hostname, not the software version. Changes to IP, expiry, or license level would require a new license.",
    reference: "Check Point R81, Managing and Installing license via SmartUpdate"
  },
  {
    id: 10,
    text: "Which of these is NOT a feature or benefit of Application Control?",
    options: [
      { id: 'A', text: "Eliminate unknown and unwanted applications in your network" },
      { id: 'B', text: "Identify and control which applications are in your IT environment" },
      { id: 'C', text: "Scans the content of files being downloaded by users" },
      { id: 'D', text: "Automatically identify trusted software that has authorization to run" }
    ],
    correctAnswer: "C",
    explanation: "Scanning the content of files is the function of the Content Awareness blade, not Application Control. Application Control enables administrators to control access to applications and websites based on type, time, and user.",
    reference: "Check Point R81 Application Control Administration Guide"
  },
  {
    id: 11,
    text: "Which software blade does NOT accompany the Threat Prevention policy?",
    options: [
      { id: 'A', text: "IPS" },
      { id: 'B', text: "Application Control and URL Filtering" },
      { id: 'C', text: "Threat Emulation" },
      { id: 'D', text: "Anti-virus" }
    ],
    correctAnswer: "B",
    explanation: "Application Control and URL Filtering are part of a separate policy (Access Control). The Threat Prevention policy manages three software blades: IPS, Anti-Virus, and Threat Emulation.",
    reference: "Check Point R81 Threat Prevention Policy Guide"
  },
  {
    id: 12,
    text: "Which of the following is a valid deployment option?",
    options: [
      { id: 'A', text: "CloudSec deployment" },
      { id: 'B', text: "Disliked deployment" },
      { id: 'C', text: "Router only deployment" },
      { id: 'D', text: "Standalone deployment" }
    ],
    correctAnswer: "D",
    explanation: "Standalone deployment is a valid option where the Security Gateway and Management Server are installed on the same machine. This is suitable for small or medium-sized networks.",
    reference: "Gaia R81.20 Administration Guide"
  },
  {
    id: 13,
    text: "Which of the following is an authentication method used for Identity Awareness?",
    options: [
      { id: 'A', text: "SSL" },
      { id: 'B', text: "Captive Portal" },
      { id: 'C', text: "PKI" },
      { id: 'D', text: "RSA" }
    ],
    correctAnswer: "B",
    explanation: "Captive Portal is a web-based authentication method used for Identity Awareness. It redirects users to a login page where they must provide credentials to access resources.",
    reference: "Identity Awareness Reference Architecture"
  },
  {
    id: 14,
    text: "When configuring LDAP User Directory integration, Changes applied to a User Directory template are:",
    options: [
      { id: 'A', text: "Reflected immediately for all users who are using template." },
      { id: 'B', text: "Not reflected for any users unless the local user template is changed." },
      { id: 'C', text: "Reflected for all users who are using that template and if the local user template is changed as well." },
      { id: 'D', text: "Not reflected for any users who are using that template." }
    ],
    correctAnswer: "A",
    explanation: "Changes applied to a User Directory template are reflected immediately for all users who are using that template because they inherit the settings from the template object.",
    reference: "Check Point R81 Identity Awareness Administration Guide"
  },
  {
    id: 15,
    text: "Fill in the blank: The position of an implied rule is manipulated in the __________________ window.",
    options: [
      { id: 'A', text: "NAT" },
      { id: 'B', text: "Firewall" },
      { id: 'C', text: "Global Properties" },
      { id: 'D', text: "Object Explorer" }
    ],
    correctAnswer: "C",
    explanation: "The position of an implied rule is manipulated in the Global Properties window under the Firewall > Implied Rules section.",
    reference: "Implied Rules in R80.x / R81.x SmartConsole"
  },
  {
    id: 16,
    text: "Which deployment adds a Security Gateway to an existing environment without changing IP routing?",
    options: [
      { id: 'A', text: "Distributed" },
      { id: 'B', text: "Bridge Mode" },
      { id: 'C', text: "Remote" },
      { id: 'D', text: "Standalone" }
    ],
    correctAnswer: "B",
    explanation: "Bridge Mode is a transparent mode that does not require assigning IP addresses to the Security Gateway interfaces, thus allowing it to be added without changing IP routing.",
    reference: "Check Point R81 Bridge Mode Guide"
  },
  {
    id: 17,
    text: "Choose what BEST describes users on Gaia Platform.",
    options: [
      { id: 'A', text: "There are two default users and neither can be deleted." },
      { id: 'B', text: "There are two default users and one cannot be deleted." },
      { id: 'C', text: "There is one default user that can be deleted." },
      { id: 'D', text: "There is one default user that cannot be deleted." }
    ],
    correctAnswer: "A",
    explanation: "There are two default users on Gaia: admin and monitor. Neither can be deleted, though their passwords can be changed.",
    reference: "Gaia Administration Guide"
  },
  {
    id: 18,
    text: "You want to set up a VPN tunnel to a external gateway. You had to make sure that the IKE P2 SA will only be established between two subnets and not all subnets defined in the default VPN domain of your gateway.",
    options: [
      { id: 'A', text: "In SmartConsole edit user.def.FWI file." },
      { id: 'B', text: "In SmartConsole create a dedicated VPN Community. Select local gateway and set VPN Domain to 'User defined' with the local network." },
      { id: 'C', text: "On the Gateway add lines to user.def.FW1 file." },
      { id: 'D', text: "Create an in-line layer rule with the specific networks and put Community name in VPN column." }
    ],
    correctAnswer: "B",
    explanation: "The recommended way is to create a dedicated VPN Community and set the VPN Domain to 'User defined', specifying only the required local network to limit the traffic.",
    reference: "Site to Site VPN R81 Administration Guide"
  },
  {
    id: 19,
    text: "Both major kinds of NAT support Hide and Static NAT. However, one offers more flexibility. Which statement is true?",
    options: [
      { id: 'A', text: "Manual NAT can offer more flexibility than Automatic NAT." },
      { id: 'B', text: "Dynamic Network Address Translation (NAT) Overloading can offer more flexibility than Port Address Translation." },
      { id: 'C', text: "Dynamic NAT with Port Address Translation can offer more flexibility than Network Address Translation (NAT) Overloading." },
      { id: 'D', text: "Automatic NAT can offer more flexibility than Manual NAT." }
    ],
    correctAnswer: "A",
    explanation: "Manual NAT offers more flexibility because it allows the administrator to define rules in any order and position within the NAT rule base, unlike Automatic NAT which places rules in fixed locations.",
    reference: "Check Point R81 Firewall Administration Guide"
  },
  {
    id: 20,
    text: "Check Point licenses come in two forms. What are those forms?",
    options: [
      { id: 'A', text: "Security Gateway and Security Management." },
      { id: 'B', text: "On-premise and Public Cloud" },
      { id: 'C', text: "Central and Local." },
      { id: 'D', text: "Access Control and Threat Prevention." }
    ],
    correctAnswer: "C",
    explanation: "Check Point licenses come in Central (attached to Management) and Local (attached to specific Gateway) forms.",
    reference: "Check Point License Guide"
  },
  {
    id: 21,
    text: "Which Check Point software blade provides Application Security and identity control?",
    options: [
      { id: 'A', text: "Identity Awareness" },
      { id: 'B', text: "Data Loss Prevention" },
      { id: 'C', text: "URL Filtering" },
      { id: 'D', text: "Application Control" }
    ],
    correctAnswer: "D",
    explanation: "Application Control provides application security and identity control by allowing administrators to identify and limit usage of thousands of applications.",
    reference: "Application Control Administration Guide"
  },
  {
    id: 22,
    text: "Which GUI tool can be used to view and apply Check Point licenses?",
    options: [
      { id: 'A', text: "cpconfig" },
      { id: 'B', text: "Management Command Line" },
      { id: 'C', text: "SmartConsole" },
      { id: 'D', text: "SmartUpdate" }
    ],
    correctAnswer: "D",
    explanation: "SmartUpdate is the GUI tool used to centrally manage licenses, software packages, and hotfixes for multiple gateways.",
    reference: "SmartUpdate Administration Guide"
  },
  {
    id: 23,
    text: "Identify the ports to which the Client Authentication daemon listens on by default?",
    options: [
      { id: 'A', text: "259, 900" },
      { id: 'B', text: "256, 257" },
      { id: 'C', text: "8080, 529" },
      { id: 'D', text: "80, 256" }
    ],
    correctAnswer: "A",
    explanation: "The Client Authentication daemon (fwauthd) listens on TCP ports 259 and 900 by default.",
    reference: "Check Point R81 Quantum Security Gateway Guide"
  },
  {
    id: 24,
    text: "Which of the following commands is used to verify license installation?",
    options: [
      { id: 'A', text: "Cplic verify license" },
      { id: 'B', text: "Cplic print" },
      { id: 'C', text: "Cplic show" },
      { id: 'D', text: "Cplic license" }
    ],
    correctAnswer: "B",
    explanation: "The command 'cplic print' is used to verify license installation and display the details of installed licenses.",
    reference: "Check Point R81 CLI Reference Guide"
  },
  {
    id: 25,
    text: "View the rule below. What does the pen-symbol in the left column mean?",
    options: [
      { id: 'A', text: "Those rules have been published in the current session." },
      { id: 'B', text: "Rules have been edited by the logged in administrator, but the policy has not been published yet." },
      { id: 'C', text: "Another user has currently locked the rules for editing." },
      { id: 'D', text: "The configuration lock is present. Click the pen symbol in order to gain the lock." }
    ],
    correctAnswer: "B",
    explanation: "The pen-symbol means that the rules have been edited in the current session but have not yet been published to the management database.",
    reference: "Policy Editor, Publishing Changes"
  },
  {
    id: 26,
    text: "Fill in the blank: Once a license is activated, a ___________ should be installed.",
    options: [
      { id: 'A', text: "Security Gateway Contract file" },
      { id: 'B', text: "Service Contract file" },
      { id: 'C', text: "License Management file" },
      { id: 'D', text: "License Contract file" }
    ],
    correctAnswer: "B",
    explanation: "After activating a license, a Service Contract file must be installed to enable support and software updates.",
    reference: "Check Point R81 Security Management Administration Guide"
  },
  {
    id: 27,
    text: "Security Gateway software blades must be attached to what?",
    options: [
      { id: 'A', text: "Security Gateway" },
      { id: 'B', text: "Security Gateway container" },
      { id: 'C', text: "Management server" },
      { id: 'D', text: "Management container" }
    ],
    correctAnswer: "B",
    explanation: "Software blades are logical features that must be enabled within a Security Gateway container object in SmartConsole.",
    reference: "Security Gateway Containers Guide"
  },
  {
    id: 28,
    text: "Which Check Point software blade monitors Check Point devices and provides a picture of network and security performance?",
    options: [
      { id: 'A', text: "Application Control" },
      { id: 'B', text: "Threat Emulation" },
      { id: 'C', text: "Logging and Status" },
      { id: 'D', text: "Monitoring" }
    ],
    correctAnswer: "D",
    explanation: "The Monitoring blade provides a comprehensive picture of network and security performance across Check Point devices.",
    reference: "Monitoring Software Blade Guide"
  },
  {
    id: 29,
    text: "Which of the following is NOT a role of the SmartCenter?",
    options: [
      { id: 'A', text: "Status monitoring" },
      { id: 'B', text: "Policy configuration" },
      { id: 'C', text: "Certificate authority" },
      { id: 'D', text: "Address translation" }
    ],
    correctAnswer: "D",
    explanation: "Address translation (NAT) is performed by the Security Gateway, not the SmartCenter management server.",
    reference: "QUANTUM SECURITY MANAGEMENT R81"
  },
  {
    id: 30,
    text: "Please choose correct command syntax to add an 'emailserver1' host with IP address 10.50.23.90 using GAiA management CLI?",
    options: [
      { id: 'A', text: "hostname myHost12 ip-address 10.50.23.90" },
      { id: 'B', text: "mgmt add host name ip-address 10.50.23.90" },
      { id: 'C', text: "add host name emailserver1 ip-address 10.50.23.90" },
      { id: 'D', text: "mgmt add host name emailserver1 ip-address 10.50.23.90" }
    ],
    correctAnswer: "D",
    explanation: "The correct mgmt CLI syntax is: mgmt add host name <name> ip-address <ip>.",
    reference: "Check Point GAiA R81 Command Line Interface Reference Guide"
  },
  {
    id: 31,
    text: "When using Automatic Hide NAT, what is enabled by default?",
    options: [
      { id: 'A', text: "Source Port Address Translation (PAT)" },
      { id: 'B', text: "Static NAT" },
      { id: 'C', text: "Static Route" },
      { id: 'D', text: "HTTPS Inspection" }
    ],
    correctAnswer: "A",
    explanation: "Automatic Hide NAT enables Source Port Address Translation (PAT) by default, allowing multiple internal hosts to share a single public IP.",
    reference: "Check Point R81 Firewall Administration Guide"
  },
  {
    id: 32,
    text: "In order to see real-time and historical graph views of Security Gateway statistics in SmartView Monitor, what feature needs to be enabled on the Security Gateway?",
    options: [
      { id: 'A', text: "Logging & Monitoring" },
      { id: 'B', text: "None - the data is available by default" },
      { id: 'C', text: "Monitoring Blade" },
      { id: 'D', text: "SNMP" }
    ],
    correctAnswer: "C",
    explanation: "The Monitoring Blade must be enabled to collect and display statistical data in SmartView Monitor.",
    reference: "Monitoring Blade Guide"
  },
  {
    id: 33,
    text: "What is the SOLR database for?",
    options: [
      { id: 'A', text: "Used for full text search and enables powerful matching capabilities" },
      { id: 'B', text: "Writes data to the database and full text search" },
      { id: 'C', text: "Serves GUI responsible to transfer request to the DLE server" },
      { id: 'D', text: "Enables powerful matching capabilities and writes data to the database" }
    ],
    correctAnswer: "A",
    explanation: "The SOLR database is used by SmartLog and SmartEvent for high-speed full-text indexing and searching of logs.",
    reference: "SOLR - Check Point Software"
  },
  {
    id: 34,
    text: "Access roles allow the firewall administrator to configure network access according to:",
    options: [
      { id: 'A', text: "remote access clients." },
      { id: 'B', text: "a combination of computer or computer groups and networks." },
      { id: 'C', text: "users and user groups." },
      { id: 'D', text: "All of the above." }
    ],
    correctAnswer: "D",
    explanation: "Access Roles can define access based on users, groups, computers, networks, and remote access clients.",
    reference: "Identity Awareness Administration Guide"
  },
  {
    id: 35,
    text: "Check Point licenses come in two forms. What are those forms?",
    options: [
      { id: 'A', text: "Central and Local." },
      { id: 'B', text: "Access Control and Threat Prevention." },
      { id: 'C', text: "On-premise and Public Cloud" },
      { id: 'D', text: "Security Gateway and Security Management." }
    ],
    correctAnswer: "A",
    explanation: "Duplicate of Question 20. Licenses are either Central (managed) or Local (standalone).",
    reference: "Check Point Licensing Guide"
  },
  {
    id: 36,
    text: "When URL Filtering is set, what identifying data gets sent to the Check Point Online Web Service?",
    options: [
      { id: 'A', text: "The URL and server certificate are sent to the Check Point Online Web Service" },
      { id: 'B', text: "The full URL, including page data, is sent to the Check Point Online Web Service" },
      { id: 'C', text: "The host part of the URL is sent to the Check Point Online Web Service" },
      { id: 'D', text: "The URL and IP address are sent to the Check Point Online Web Service" }
    ],
    correctAnswer: "C",
    explanation: "To preserve privacy, typically only the host portion of the URL is sent for categorization.",
    reference: "URL Filtering Administration Guide"
  },
  {
    id: 37,
    text: "Which message indicates IKE Phase 2 has completed successfully?",
    options: [
      { id: 'A', text: "Quick Mode Complete" },
      { id: 'B', text: "Aggressive Mode Complete" },
      { id: 'C', text: "Main Mode Complete" },
      { id: 'D', text: "IKE Mode Complete" }
    ],
    correctAnswer: "A",
    explanation: "In IKEv1, Phase 2 is known as Quick Mode. The message 'Quick Mode Complete' indicates successful negotiation of the IPsec SA.",
    reference: "IPsec VPN Troubleshooting Guide"
  },
  {
    id: 38,
    text: "Which of the following is NOT a component of a Distinguished Name?",
    options: [
      { id: 'A', text: "Common Name" },
      { id: 'B', text: "Country" },
      { id: 'C', text: "User container" },
      { id: 'D', text: "Organizational Unit" }
    ],
    correctAnswer: "C",
    explanation: "Common Name (cn), Country (c), and Organizational Unit (ou) are standard LDAP attributes. 'User container' is not a standard RDN attribute type.",
    reference: "Identity Awareness Administration Guide"
  },
  {
    id: 39,
    text: "What protocol is specifically used for clustered environments?",
    options: [
      { id: 'A', text: "Clustered Protocol" },
      { id: 'B', text: "Synchronized Cluster Protocol" },
      { id: 'C', text: "Control Cluster Protocol" },
      { id: 'D', text: "Cluster Control Protocol" }
    ],
    correctAnswer: "D",
    explanation: "Cluster Control Protocol (CCP) is used by Check Point ClusterXL for synchronization and heartbeats.",
    reference: "ClusterXL Administration Guide"
  },
  {
    id: 40,
    text: "Secure Internal Communication (SIC) is handled by what process?",
    options: [
      { id: 'A', text: "CPM" },
      { id: 'B', text: "HTTPS" },
      { id: 'C', text: "FWD" },
      { id: 'D', text: "CPD" }
    ],
    correctAnswer: "D",
    explanation: "The CPD (Check Point Daemon) handles SIC, licensing, and other essential management communications.",
    reference: "Security Management Administration Guide"
  },
  {
    id: 41,
    text: "Which repositories are installed on the Security Management Server by SmartUpdate?",
    options: [
      { id: 'A', text: "License and Update" },
      { id: 'B', text: "Package Repository and Licenses" },
      { id: 'C', text: "Update and License & Contract" },
      { id: 'D', text: "License & Contract and Package Repository" }
    ],
    correctAnswer: "D",
    explanation: "SmartUpdate installs the License & Contract repository and the Package Repository.",
    reference: "Managing licenses via SmartUpdate"
  },
  {
    id: 42,
    text: "You are the Check Point administrator for Alpha Corp with an R80 Check Point estate. You have received a call by one of the management users stating that they are unable to browse the Internet with their new tablet connected to the company Wireless. The Wireless system goes through the Check Point Gateway. How do you review the logs to see what the problem may be?",
    options: [
      { id: 'A', text: "Open SmartLog and connect remotely to the IP of the wireless controller" },
      { id: 'B', text: "Open SmartView Tracker and filter the logs for the IP address of the tablet" },
      { id: 'C', text: "Open SmartView Tracker and check all the IP logs for the tablet" },
      { id: 'D', text: "Open SmartLog and query for the IP address of the Manager’s tablet" }
    ],
    correctAnswer: "D",
    explanation: "SmartLog is the unified log viewer where you should query for the specific device's IP to troubleshoot connectivity.",
    reference: "SmartLog Queries Guide"
  },
  {
    id: 43,
    text: "Name one limitation of using Security Zones in the network?",
    options: [
      { id: 'A', text: "Security zones will not work in Automatic NAT rules" },
      { id: 'B', text: "Security zone will not work in Manual NAT rules" },
      { id: 'C', text: "Security zones will not work in firewall policy layer" },
      { id: 'D', text: "Security zones cannot be used in network topology" }
    ],
    correctAnswer: "B",
    explanation: "Security Zones are logical objects that are supported in the Rule Base and Automatic NAT, but cannot be used as source/destination in Manual NAT rules.",
    reference: "NAT Methods Best Practices"
  },
  {
    id: 44,
    text: "Which Threat Prevention Profile is not included by default in R80 Management?",
    options: [
      { id: 'A', text: "Basic" },
      { id: 'B', text: "Optimized" },
      { id: 'C', text: "Strict" },
      { id: 'D', text: "Recommended" }
    ],
    correctAnswer: "D",
    explanation: "The default profiles are Basic, Optimized, and Strict. 'Recommended' is not a default profile name.",
    reference: "Threat Prevention Administration Guide"
  },
  {
    id: 45,
    text: "Bob and Joe both have Administrator Roles on their Gaia Platform. Bob logs in on the WebUI and then Joe logs in through CLI. Choose what BEST describes the following scenario, where Bob and Joe are both logged in:",
    options: [
      { id: 'A', text: "Since they both are logged in on different interfaces, they will both be able to make changes." },
      { id: 'B', text: "When Joe logs in. Bob will be logged out automatically." },
      { id: 'C', text: "The database will be locked by Bob and Joe will not be able to make any changes." },
      { id: 'D', text: "Bob will receive a prompt that Joe has logged in." }
    ],
    correctAnswer: "A",
    explanation: "Gaia allows multiple administrators to log in simultaneously via different interfaces (WebUI/CLI) and perform changes.",
    reference: "Gaia R81.20 Administration Guide"
  },
  {
    id: 46,
    text: "When configuring Anti-Spoofing, which tracking options can an Administrator select?",
    options: [
      { id: 'A', text: "Log, Alert, None" },
      { id: 'B', text: "Log, Allow Packets, Email" },
      { id: 'C', text: "Drop Packet, Alert, None" },
      { id: 'D', text: "Log, Send SNMP Trap, Email" }
    ],
    correctAnswer: "A",
    explanation: "For Anti-Spoofing violations, you can choose to Log the event, trigger an Alert, or select None.",
    reference: "Anti-Spoofing Best Practices"
  },
  {
    id: 47,
    text: "What is NOT an advantage of Stateful Inspection?",
    options: [
      { id: 'A', text: "High Performance" },
      { id: 'B', text: "Good Security" },
      { id: 'C', text: "No Screening above Network layer" },
      { id: 'D', text: "Transparency" }
    ],
    correctAnswer: "C",
    explanation: "Stateful Inspection *does* screen traffic above the network layer (up to Layer 7), so 'No Screening' is not an advantage/characteristic.",
    reference: "Stateful Inspection Technology Guide"
  },
  {
    id: 48,
    text: "Which of the following is NOT a valid configuration screen of an Access Role Object?",
    options: [
      { id: 'A', text: "Users" },
      { id: 'B', text: "Networks" },
      { id: 'C', text: "Time" },
      { id: 'D', text: "Machines" }
    ],
    correctAnswer: "C",
    explanation: "Access Role configuration screens are Users, Machines, Networks, and Identity Tags. 'Time' is defined in the Rule, not the Role.",
    reference: "Identity Awareness Administration Guide"
  },
  {
    id: 49,
    text: "Fill in the blanks: A ____ license requires an administrator to designate a gateway for attachment whereas a _____ license is automatically attached to a Security Gateway.",
    options: [
      { id: 'A', text: "Formal; corporate" },
      { id: 'B', text: "Local; formal" },
      { id: 'C', text: "Local; central" },
      { id: 'D', text: "Central; local" }
    ],
    correctAnswer: "D",
    explanation: "A Central license is automatically attached to a gateway upon installation, while a Local license requires manual attachment by an administrator.",
    reference: "Managing licenses via SmartUpdate"
  },
  {
    id: 50,
    text: "What command would show the API server status?",
    options: [
      { id: 'A', text: "cpm status" },
      { id: 'B', text: "api restart" },
      { id: 'C', text: "api status" },
      { id: 'D', text: "show api status" }
    ],
    correctAnswer: "C",
    explanation: "The 'api status' command displays the state, version, and port of the Management API server.",
    reference: "Check Point R81 API Reference Guide"
  },
  {
    id: 51,
    text: "Which of the following statements about Site-to-Site VPN Domain-based is NOT true?",
    options: [
      { id: 'A', text: "Route-based— VTIs allow the Routing Table to forward traffic to VPN tunnels." },
      { id: 'B', text: "Domain-based— A VPN domain is a service or user that can send or receive VPN traffic." },
      { id: 'C', text: "Domain-based— Traffic is identified as VPN traffic when originating from one VPN Domain destined for another." },
      { id: 'D', text: "Route-based— Traffic through a VTI is automatically identified as VPN traffic." }
    ],
    correctAnswer: "B",
    explanation: "A VPN domain is not a service or user; it is a set of hosts or networks (IP addresses) protected by the gateway.",
    reference: "Site to Site VPN Administration Guide"
  },
  {
    id: 52,
    text: "In which deployment is the security management server and Security Gateway installed on the same appliance?",
    options: [
      { id: 'A', text: "Standalone" },
      { id: 'B', text: "Remote" },
      { id: 'C', text: "Distributed" },
      { id: 'D', text: "Bridge Mode" }
    ],
    correctAnswer: "A",
    explanation: "A Standalone deployment contains both management and enforcement modules on one hardware appliance.",
    reference: "R81 Deployment Options"
  },
  {
    id: 53,
    text: "John is using Management HA. Which Smartcenter should be connected to for making changes?",
    options: [
      { id: 'A', text: "secondary Smartcenter" },
      { id: 'B', text: "active Smartcenter" },
      { id: 'C', text: "connect virtual IP of Smartcenter HA" },
      { id: 'D', text: "primary Smartcenter" }
    ],
    // Fixed: Removed unsupported 'optionsOrdering' property causing TS error
    correctAnswer: "B",
    explanation: "Changes can only be made on the Active management server in an HA setup.",
    reference: "Management High Availability Guide"
  },
  {
    id: 54,
    text: "Fill in the blank: ____________ is the Gaia command that turns the server off.",
    options: [
      { id: 'A', text: "sysdown" },
      { id: 'B', text: "exit" },
      { id: 'C', text: "halt" },
      { id: 'D', text: "shut-down" }
    ],
    correctAnswer: "C",
    explanation: "The 'halt' command gracefully shuts down the Gaia OS and powers off the machine.",
    reference: "Gaia Administration Guide"
  },
  {
    id: 55,
    text: "Which of the following is NOT a valid configuration screen of an Access Role Object?",
    options: [
      { id: 'A', text: "All-in-one (stand-alone)" },
      { id: 'B', text: "Log server" },
      { id: 'C', text: "SmartEvent" },
      { id: 'D', text: "Multi-domain management server" }
    ],
    correctAnswer: "D",
    explanation: "Multi-domain management became a major standalone deployment option from R81 onwards (though available as a separate product earlier).",
    reference: "R80 Deployment Guide"
  },
  {
    id: 56,
    text: "You are the Check Point administrator for Alpha Corp. You received a call that one of the users is unable to browse the Internet on their new tablet which is connected to the company wireless, which goes through a Check Point Gateway. How would you review the logs to see what is blocking this traffic?",
    options: [
      { id: 'A', text: "Open SmartLog and connect remotely to the wireless controller" },
      { id: 'B', text: "Open SmartEvent to see why they are being blocked" },
      { id: 'C', text: "Open SmartDashboard and review the logs tab" },
      { id: 'D', text: "From SmartConsole, go to the Log & Monitor and filter for the IP address of the tablet." }
    ],
    correctAnswer: "D",
    explanation: "The standard way in R80+ is to use the Log & Monitor tab in SmartConsole to filter for device IPs.",
    reference: "Logging and Monitoring Guide"
  },
  {
    id: 57,
    text: "Vanessa is attempting to log into the Gaia Web Portal. She is able to login successfully. Then she tries the same username and password for SmartConsole but gets 'Authentication failed'. What is the most likely reason?",
    options: [
      { id: 'A', text: "R80 SmartConsole requires a special authentication key." },
      { id: 'B', text: "Management software authentication details are not automatically the same as OS details." },
      { id: 'C', text: "SmartConsole Authentication is not allowed until a Super admin clears the session." },
      { id: 'D', text: "Username not allowed in Threat Prevention update checks." }
    ],
    correctAnswer: "B",
    explanation: "Management administrators are separate from Gaia OS users. They must be explicitly created in SmartConsole.",
    reference: "SmartConsole Login Troubleshooting"
  },
  {
    id: 58,
    text: "Which command shows detailed information about VPN tunnels?",
    options: [
      { id: 'A', text: "cat $FWDIR/conf/vpn.conf" },
      { id: 'B', text: "vpn tu tlist" },
      { id: 'C', text: "vpn tu" },
      { id: 'D', text: "cpview" }
    ],
    correctAnswer: "C",
    explanation: "'vpn tu' is the standard interactive CLI tool for viewing and managing VPN tunnels.",
    reference: "VPN Troubleshooting Guide"
  },
  {
    id: 59,
    text: "What is required for a certificate-based VPN tunnel between two gateways with separate management systems?",
    options: [
      { id: 'A', text: "Shared Secret Passwords" },
      { id: 'B', text: "Unique Passwords" },
      { id: 'C', text: "Shared User Certificates" },
      { id: 'D', text: "Mutually Trusted Certificate Authorities" }
    ],
    correctAnswer: "D",
    explanation: "For separate management domains, both must trust the other's CA to validate the gateway certificates.",
    reference: "Certificate Based VPN Guide"
  },
  {
    id: 60,
    text: "Which software blade enables Access Control policies to accept, drop, or limit web site access based on user, group, and/or machine?",
    options: [
      { id: 'A', text: "Application Control" },
      { id: 'B', text: "Data Awareness" },
      { id: 'C', text: "Identity Awareness" },
      { id: 'D', text: "Threat Emulation" }
    ],
    correctAnswer: "A",
    explanation: "Application Control provides the ability to regulate web access based on identities and categories.",
    reference: "Application Control Administration Guide"
  },
  {
    id: 61,
    text: "Which Security Blade needs to be enabled in order to sanitize and remove potentially malicious content from files, before those files enter the network?",
    options: [
      { id: 'A', text: "Threat Emulation" },
      { id: 'B', text: "Anti-Malware" },
      { id: 'C', text: "Anti-Virus" },
      { id: 'D', text: "Threat Extraction" }
    ],
    correctAnswer: "D",
    explanation: "Threat Extraction sanitizes files by removing active content or converting them to safe formats.",
    reference: "Threat Extraction Guide"
  },
  {
    id: 62,
    text: "What are the three deployment options available for a security gateway?",
    options: [
      { id: 'A', text: "Standalone, Distributed, and Bridge Mode" },
      { id: 'B', text: "Bridge Mode, Remote, and Standalone" },
      { id: 'C', text: "Remote, Standalone, and Distributed" },
      { id: 'D', text: "Distributed, Bridge Mode, and Remote" }
    ],
    correctAnswer: "A",
    explanation: "The primary architectures are Standalone (all-in-one), Distributed (separate), and Bridge (transparent).",
    reference: "R81 Security Gateway Administration Guide"
  },
  {
    id: 63,
    text: "Core Protections are installed as part of what Policy?",
    options: [
      { id: 'A', text: "Access Control Policy." },
      { id: 'B', text: "Desktop Firewall Policy" },
      { id: 'C', text: "Mobile Access Policy." },
      { id: 'D', text: "Threat Prevention Policy." }
    ],
    correctAnswer: "D",
    explanation: "IPS Core Protections are managed within the Threat Prevention policy layers.",
    reference: "IPS Administration Guide"
  },
  {
    id: 64,
    text: "What is the best sync method in the ClusterXL deployment?",
    options: [
      { id: 'A', text: "Use 1 cluster + 1st sync" },
      { id: 'B', text: "Use 1 dedicated sync interface" },
      { id: 'C', text: "Use 3 clusters + 1st sync + 2nd sync + 3rd sync" },
      { id: 'D', text: "Use 2 clusters + 1st sync + 2nd sync" }
    ],
    correctAnswer: "B",
    explanation: "Dedicated sync interfaces are the most stable and performant method for ClusterXL synchronization.",
    reference: "ClusterXL Synchronization Guide"
  },
  {
    id: 65,
    text: "Which option in a firewall rule would only match and allow traffic to VPN gateways for one Community in common?",
    options: [
      { id: 'A', text: "All Connections (Clear or Encrypted)" },
      { id: 'B', text: "Accept all encrypted traffic" },
      { id: 'C', text: "Specific VPN Communities" },
      { id: 'D', text: "All Site-to-Site VPN Communities" }
    ],
    correctAnswer: "C",
    explanation: "Selecting a Specific VPN Community in the 'VPN' column of a rule limits traffic to only that specific tunnel.",
    reference: "Site to Site VPN Guide"
  },
  {
    id: 66,
    text: "True or False: The destination server for Security Gateway logs depends on a Security Management Server configuration.",
    options: [
      { id: 'A', text: "False, log servers are configured on the Log Server General Properties" },
      { id: 'B', text: "True, all Security Gateways will only forward logs with a SmartCenter Server configuration" },
      { id: 'C', text: "True, all Security Gateways forward logs automatically to the Security Management Server" },
      { id: 'D', text: "False, log servers are enabled on the Security Gateway General Properties" }
    ],
    correctAnswer: "B",
    explanation: "Destination log servers are configured as objects in SmartConsole and assigned to gateways.",
    reference: "Logging and Monitoring Guide"
  },
  {
    id: 67,
    text: "Will the Hit count feature work independently from logging and Track the hits even if the Track option is set to 'None'?",
    options: [
      { id: 'A', text: "No, hit count requires rules to be logged" },
      { id: 'B', text: "Yes, as long as 'analyze all rules' is enabled" },
      { id: 'C', text: "No, hit count requires track set to Log" },
      { id: 'D', text: "Yes, the SMS collects Hit Count data regardless of tracking settings" }
    ],
    correctAnswer: "D",
    explanation: "Hit Count is a separate mechanism from logging; it works even if a rule is set to track 'None'.",
    reference: "Security Management Administration Guide"
  },
  {
    id: 68,
    text: "Which of the following is NOT a tracking option? (Select three)",
    options: [
      { id: 'A', text: "Partial log" },
      { id: 'B', text: "Log" },
      { id: 'C', text: "Network log" },
      { id: 'D', text: "Full log" }
    ],
    correctAnswer: ["A", "C", "D"],
    explanation: "Standard tracking options are Log, Detailed Log, Extended Log, Alert, and None. 'Partial', 'Network', and 'Full' are not valid options.",
    reference: "Logging and Monitoring Administration Guide"
  },
  {
    id: 69,
    text: "Which of the following is used to initially create trust between a Gateway and Security Management Server?",
    options: [
      { id: 'A', text: "Internal Certificate Authority" },
      { id: 'B', text: "Token" },
      { id: 'C', text: "One-time Password" },
      { id: 'D', text: "Certificate" }
    ],
    correctAnswer: "C",
    explanation: "SIC trust is established using a One-time Password (activation key) configured in SmartConsole and on the gateway.",
    reference: "Configuring SIC Guide"
  },
  {
    id: 70,
    text: "Fill in the blank: Permanent VPN tunnels can be set on all tunnels in the community, on all tunnels for specific gateways, or __________.",
    options: [
      { id: 'A', text: "On all satellite gateway to satellite gateway tunnels" },
      { id: 'B', text: "On specific tunnels for specific gateways" },
      { id: 'C', text: "On specific tunnels in the community" },
      { id: 'D', text: "On specific satellite gateway to central gateway tunnels" }
    ],
    correctAnswer: "C",
    explanation: "Permanent tunnels ensure tunnels stay up. Options are: all in community, all for specific gateways, or specific tunnels.",
    reference: "VPN Administration Guide"
  },
  {
    id: 71,
    text: "While configuring a VPN community, the administrator did not find a box to input the pre-shared secret. Why?",
    options: [
      { id: 'A', text: "The Gateway is an SMB device" },
      { id: 'B', text: "Use only Shared Secret checkbox is unchecked" },
      { id: 'C', text: "Certificate based Authentication is the only method for gateways managed by same SMS" },
      { id: 'D', text: "Pre-shared secret is in Global Properties" }
    ],
    correctAnswer: "C",
    explanation: "If both gateways are in the same management domain, Check Point defaults to internal CA certificate authentication.",
    reference: "Certificate Based Authentication Guide"
  },
  {
    id: 72,
    text: "What command from the CLI would be used to view current licensing?",
    options: [
      { id: 'A', text: "license view" },
      { id: 'B', text: "fw ctl tab -t license -s" },
      { id: 'C', text: "show license -s" },
      { id: 'D', text: "cplic print" }
    ],
    correctAnswer: "D",
    explanation: "'cplic print' is the standard CLI command to view installed licenses.",
    reference: "CLI Reference Guide"
  },
  {
    id: 73,
    text: "What type of NAT is a one-to-one relationship where each host is translated to a unique address?",
    options: [
      { id: 'A', text: "Source" },
      { id: 'B', text: "Static" },
      { id: 'C', text: "Hide" },
      { id: 'D', text: "Destination" }
    ],
    correctAnswer: "B",
    explanation: "Static NAT provides a 1:1 mapping between a private IP and a public IP.",
    reference: "NAT Methods Guide"
  },
  {
    id: 74,
    text: "Which of these features is NOT associated with URL Filtering and Application Control?",
    options: [
      { id: 'A', text: "Detects and blocks malware by correlating detection engines" },
      { id: 'B', text: "Configure rules to limit bandwidth for users" },
      { id: 'C', text: "Use UserCheck to help users understand policy" },
      { id: 'D', text: "Allow or block sites based on risk levels" }
    ],
    correctAnswer: "A",
    explanation: "Malware correlation and blocking is handled by Anti-Virus/Anti-Bot, not URLF/Application Control.",
    reference: "URL Filtering Administration Guide"
  },
  {
    id: 75,
    text: "Which Threat Prevention profile uses sanitization technology?",
    options: [
      { id: 'A', text: "Cloud/data Center" },
      { id: 'B', text: "perimeter" },
      { id: 'C', text: "Sandbox" },
      { id: 'D', text: "Guest Network" }
    ],
    correctAnswer: "B",
    explanation: "The Perimeter profile typically includes Threat Extraction for file sanitization.",
    reference: "Threat Prevention Profiles Guide"
  },
  {
    id: 76,
    text: "AdminA and AdminB are both logged in. What does it mean if AdminB sees a lock icon on a rule?",
    options: [
      { id: 'A', text: "Rule is locked by AdminA and will be available if the session is published" },
      { id: 'B', text: "Rule is locked because it is currently being edited" },
      { id: 'C', text: "Rule locked and will be available if session saved" },
      { id: 'D', text: "Rule locked because save button not pressed" }
    ],
    correctAnswer: "A",
    explanation: "Locks indicate another administrator has un-published changes on those objects.",
    reference: "Security Management Administration Guide"
  },
  {
    id: 77,
    text: "What is the purpose of a Stealth Rule?",
    options: [
      { id: 'A', text: "Hide server IP from outside world" },
      { id: 'B', text: "Allow admins to access SmartDashboard" },
      { id: 'C', text: "To drop any traffic destined for the firewall that is not otherwise explicitly allowed." },
      { id: 'D', text: "Drop traffic at end of policy" }
    ],
    correctAnswer: "C",
    explanation: "The Stealth Rule protects the gateway itself from direct communication from unauthorized hosts.",
    reference: "Security Policy Best Practices"
  },
  {
    id: 78,
    text: "What is the default shell of Gaia CLI?",
    options: [
      { id: 'A', text: "clish" },
      { id: 'B', text: "Monitor" },
      { id: 'C', text: "Read-only" },
      { id: 'D', text: "Bash" }
    ],
    correctAnswer: "A",
    explanation: "Gaia Clish is the default command-line interface shell for Check Point appliances.",
    reference: "Gaia Administration Guide"
  },
  {
    id: 79,
    text: "When defining group-based access in an LDAP environment, what is the BEST object type to represent an LDAP group in a Security Policy?",
    options: [
      { id: 'A', text: "Access Role" },
      { id: 'B', text: "User Group" },
      { id: 'C', text: "SmartDirectory Group" },
      { id: 'D', text: "Group Template" }
    ],
    correctAnswer: "A",
    explanation: "Access Roles are the modern and flexible way to map LDAP users/groups into the rule base.",
    reference: "Identity Awareness Administration Guide"
  },
  {
    id: 80,
    text: "Which type of Check Point license is tied to the IP address of a specific Security Gateway?",
    options: [
      { id: 'A', text: "Formal" },
      { id: 'B', text: "Central" },
      { id: 'C', text: "Corporate" },
      { id: 'D', text: "Local" }
    ],
    correctAnswer: "D",
    explanation: "Local licenses are bound to the specific IP address of the gateway hardware.",
    reference: "Check Point Licensing Guide"
  },
  {
    id: 81,
    text: "Aggressive Mode in IKEv1 uses how many packages for negotiation?",
    options: [
      { id: 'A', text: "6" },
      { id: 'B', text: "3" },
      { id: 'C', text: "Depends on gateway" },
      { id: 'D', text: "5" }
    ],
    correctAnswer: "B",
    explanation: "Aggressive Mode negotiates Phase 1 in exactly 3 packets (Main Mode uses 6).",
    reference: "IPsec VPN Guide"
  },
  {
    id: 82,
    text: "Tom suddenly loses connectivity while making rule changes. What happens to the changes?",
    options: [
      { id: 'A', text: "Tom will have to clear cache and restore" },
      { id: 'B', text: "Reboot required to access cache" },
      { id: 'C', text: "Changes will be lost" },
      { id: 'D', text: "Tom's changes will have been stored on the Management server when he reconnects." }
    ],
    correctAnswer: "D",
    explanation: "SmartConsole uses sessions; un-published changes are stored on the server.",
    reference: "Security Management Administration Guide"
  },
  {
    id: 83,
    text: "Which license type ties the package to the IP address of the Management Server?",
    options: [
      { id: 'A', text: "Central" },
      { id: 'B', text: "Corporate" },
      { id: 'C', text: "Local" },
      { id: 'D', text: "Formal" }
    ],
    correctAnswer: "A",
    explanation: "Central licenses are tied to the management IP and can be distributed to any gateway.",
    reference: "Licensing Guide"
  },
  {
    id: 84,
    text: "Which SmartConsole tab is used to monitor network and security performance?",
    options: [
      { id: 'A', text: "Manage & Settings" },
      { id: 'B', text: "Security Policies" },
      { id: 'C', text: "Gateway & Servers" },
      { id: 'D', text: "Logs & Monitor" }
    ],
    correctAnswer: "D",
    explanation: "The Logs & Monitor tab contains all visibility and performance tools.",
    reference: "SmartConsole Navigation Guide"
  },
  {
    id: 85,
    text: "True or False: In R80, more than one administrator can login with write permission at the same time.",
    options: [
      { id: 'A', text: "False, must enable in Global Properties" },
      { id: 'B', text: "True, every administrator works in a session that is independent of others." },
      { id: 'C', text: "True, every admin works on different database" },
      { id: 'D', text: "False, only one write login allowed" }
    ],
    correctAnswer: "B",
    explanation: "R80+ introduced concurrent administration via session-based locking.",
    reference: "R80 Concurrent Administration"
  },
  {
    id: 86,
    text: "Which statement describes what Identity Sharing is in Identity Awareness?",
    options: [
      { id: 'A', text: "Servers share identities with Gateways" },
      { id: 'B', text: "Users share identities with users" },
      { id: 'C', text: "Security Gateways can acquire and share identities with other Security Gateways" },
      { id: 'D', text: "Admins share identifies with admins" }
    ],
    correctAnswer: "C",
    explanation: "Identity Sharing allows gateways to propagate identity info to other gateways.",
    reference: "Identity Awareness Administration Guide"
  },
  {
    id: 87,
    text: "When enabling tracking on a rule, what is the default option?",
    options: [
      { id: 'A', text: "Accounting Log" },
      { id: 'B', text: "Extended Log" },
      { id: 'C', text: "Log" },
      { id: 'D', text: "Detailed Log" }
    ],
    correctAnswer: "C",
    explanation: "The standard default tracking option for a rule is 'Log'.",
    reference: "Logging and Monitoring Guide"
  },
  {
    id: 88,
    text: "Where is the 'Hit Count' feature enabled or disabled in SmartConsole?",
    options: [
      { id: 'A', text: "On the Policy Package" },
      { id: 'B', text: "On each Security Gateway" },
      { id: 'C', text: "On the Policy layer" },
      { id: 'D', text: "In Global Properties for the SMS" }
    ],
    correctAnswer: "C",
    explanation: "Hit count is configured per Policy Layer.",
    reference: "Security Management Administration Guide"
  },
  {
    id: 89,
    text: "Where can alerts be viewed?",
    options: [
      { id: 'A', text: "Alerts can be seen in SmartView Monitor" },
      { id: 'B', text: "In Threat Prevention policy" },
      { id: 'C', text: "In SmartUpdate" },
      { id: 'D', text: "In CLI of gateway" }
    ],
    correctAnswer: "A",
    explanation: "SmartView Monitor is the GUI tool for real-time alerts.",
    reference: "Monitoring Administration Guide"
  },
  {
    id: 90,
    text: "Which command syntax sets the IP to 192.168.80.200/24 and default gateway to 192.168.80.1?",
    options: [
      { id: 'A', text: "set interface Mgmt ipv4-address 192.168.80.200 mask-length 24; set static-route default nexthop gateway address 192.168.80.1 on; save config" },
      { id: 'B', text: "add interface Mgmt... add static-route..." },
      { id: 'C', text: "set interface Mgmt... add static-route..." },
      { id: 'D', text: "add interface Mgmt... mask-length 24..." }
    ],
    correctAnswer: "A",
    explanation: "Standard clish commands: set interface, set static-route, and save config.",
    reference: "Gaia CLI Reference Guide"
  },
  {
    id: 91,
    text: "R80.10 management server can manage gateways with which versions installed?",
    options: [
      { id: 'A', text: "Versions R77 and higher" },
      { id: 'B', text: "Versions R76 and higher" },
      { id: 'C', text: "Versions R75.20 and higher" },
      { id: 'D', text: "Version R75 and higher" }
    ],
    correctAnswer: "B",
    explanation: "R80.10 management supports enforcement points from R76 upwards.",
    reference: "R80.10 Release Notes"
  },
  {
    id: 92,
    text: "Fill in the blank: SmartConsole, SmartEvent GUI client, and ___________ allow viewing of billions of consolidated logs.",
    options: [
      { id: 'A', text: "SmartView Web Application" },
      { id: 'B', text: "SmartTracker" },
      { id: 'C', text: "SmartMonitor" },
      { id: 'D', text: "SmartReporter" }
    ],
    correctAnswer: "A",
    explanation: "SmartView Web is the modern browser-based interface for log analysis.",
    reference: "SmartEvent Administration Guide"
  },
  {
    id: 93,
    text: "To increase security, the administrator modified 'Host Port Scan' sensitivity. Which Policy should be installed?",
    options: [
      { id: 'A', text: "Access Control and Threat Prevention" },
      { id: 'B', text: "Access Control" },
      { id: 'C', text: "Access Control & HTTPS Inspection" },
      { id: 'D', text: "The Threat Prevention Policy." }
    ],
    correctAnswer: "D",
    explanation: "Core Protections and IPS sensitivity are part of the Threat Prevention policy.",
    reference: "Threat Prevention Administration Guide"
  },
  {
    id: 94,
    text: "Which product deployment utilizes special Check Point code (Scalable Platforms)?",
    options: [
      { id: 'A', text: "Enterprise Appliances" },
      { id: 'B', text: "Rugged Appliances" },
      { id: 'C', text: "Scalable Platforms" },
      { id: 'D', text: "Small Business Appliances" }
    ],
    correctAnswer: "C",
    explanation: "Scalable Platforms (Maestro) use a unified code base starting from R81.10.",
    reference: "R81 Release Notes"
  },
  {
    id: 95,
    text: "Name the authentication method that requires token authenticator.",
    options: [
      { id: 'A', text: "SecureID" },
      { id: 'B', text: "Radius" },
      { id: 'C', text: "DynamicID" },
      { id: 'D', text: "TACACS" }
    ],
    correctAnswer: "A",
    explanation: "SecureID (RSA) is the standard 2FA method utilizing hardware/software tokens.",
    reference: "Identity Awareness Administration Guide"
  },
  {
    id: 96,
    text: "Fill in the blank: The _____ feature allows administrators to share a policy with other policy packages.",
    options: [
      { id: 'A', text: "Concurrent policy" },
      { id: 'B', text: "Concurrent policies" },
      { id: 'C', text: "Global Policies" },
      { id: 'D', text: "Shared policies" }
    ],
    correctAnswer: "D",
    explanation: "Shared Policies layers allow reuse across different policy packages.",
    reference: "Security Management Administration Guide"
  },
  {
    id: 97,
    text: "How does the administrator use the Online Activation method for appliances?",
    options: [
      { id: 'A', text: "SmartLicensing GUI tool" },
      { id: 'B', text: "No action required" },
      { id: 'C', text: "Using the Gaia First Time Configuration Wizard, the appliance connects and downloads licenses." },
      { id: 'D', text: "cpinfo command" }
    ],
    correctAnswer: "C",
    explanation: "Activation is part of the initial Gaia setup wizard for internet-connected appliances.",
    reference: "Gaia Installation Guide"
  },
  {
    id: 98,
    text: "Which encryption algorithm is the least secured?",
    options: [
      { id: 'A', text: "3DES" },
      { id: 'B', text: "AES-128" },
      { id: 'C', text: "DES" },
      { id: 'D', text: "AES-256" }
    ],
    correctAnswer: "C",
    explanation: "DES uses a 56-bit key and is considered cryptographically broken.",
    reference: "Data Encryption Standard - Wikipedia"
  },
  {
    id: 99,
    text: "Which tool allows you to monitor the top bandwidth on smart console?",
    options: [
      { id: 'A', text: "Logs & Monitoring" },
      { id: 'B', text: "Smart Event" },
      { id: 'C', text: "Gateways & Severs Tab" },
      { id: 'D', text: "SmartView Monitor" }
    ],
    correctAnswer: "D",
    explanation: "SmartView Monitor provides real-time visibility into traffic and bandwidth usage.",
    reference: "Monitoring Administration Guide"
  },
  {
    id: 100,
    text: "When using Monitored circuit VRRP, what is a priority delta?",
    options: [
      { id: 'A', text: "Priority changes to the delta" },
      { id: 'B', text: "Delta claims the priority" },
      { id: 'C', text: "When an interface fails the priority delta is subtracted from the priority" },
      { id: 'D', text: "Delta decides if other interface takes over" }
    ],
    correctAnswer: "C",
    explanation: "A delta value is subtracted from the priority upon failure to trigger a failover.",
    reference: "ClusterXL Administration Guide"
  },
  {
    id: 101,
    text: "Which two of these Check Point Protocols are used for log retrieval?",
    options: [
      { id: 'A', text: "ELA and CPD" },
      { id: 'B', text: "FWD and LEA" },
      { id: 'C', text: "FWD and CPLOG" },
      { id: 'D', text: "ELA and CPLOG" }
    ],
    correctAnswer: "B",
    explanation: "FWD handles log forwarding, and LEA (Log Export API) is used for external log retrieval.",
    reference: "Check Point CheckMates Protocols Guide"
  }
];