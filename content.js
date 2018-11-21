/**
 * DOCUMENT CONTENT OBJECTS
 * @summary This file contains the data objects that form the content of this page
 * @author Cliff Crerar
 * Created at     : 2018-11-15 16:47:36
 * Last modified  : 2018-11-21 23:36:19
 */

// Code use for note:
// <div class="paper note"> <p><b class="note-start">NOTE:</b> SOME NOTE </p></div>

const content = {
    /**
     * 1. Introduction
     */
    Introduction: {
        textArr: [
            // Paragraph 1
            'Structured query language (SQL) is a <a id="dsfl">domain-specific language</a> used to program, design and administer <a id="rdbms">relational-database-management systems</a>(RDBMS).',
            // Paragraph 2
            'The language is used by many types of users including software developers, database administrators, consultants implementing external software that must integrate with operational and financial business systems.',
            // Paragraph 3
            'In this tech age there are even users in other functions of business like finance and procurement that prefer to interact directly with their data instead of opting to use a front end application. It can also be a powerful tool in the hands of an internal auditor.',
            // Paragraph 4
            'RDBMS, also known as Relational Databases or DBMS, are the industry standard data repositories used by most business systems, large and small, that must store day to day transactions generated under normal operating conditions. These types of database is also referred to as <a id="oltp">online transaction processing</a> or OLTP.',
            // Paragraph 5
            'These OLTP database are optimised to process many single or small batches of transaction, even when the database is distributed across multiple regions or even globally while always maintaining consistency of data.',
            // Paragraph 6
            'The other general type of RDBMS is <a id="olap">on-line analytical processing</a> or OLAP database. This type of database is optimised to process vast amounts of transactions normally generated by an OLTP database, and OLTP is normally the source of an OLAP repository.',
            // Paragraph 7
            'OLAP is mainly for generating information to support management decision making in all business functions and at all levels of management.',
            // Paragraph 8
            'There are many variations of RDBMS, open-source and enterprise. Most notable enterprise RDBMS is Oracle database and Microsoft SQL server. PostgreSQL, MySQL and SQLite are most notable open-source RDBMS.',
            // Paragraph 9
            'SQL is a language that is based on <a id="relAlg">relational algebra</a> and <a id="tupCalc">tuple calculus</a>. It consists of a subset of languages and are listed as follows:<br>',
            // Unordered list
            '<ul class="intro-ul">' +
            '<li>Data Query Language (DQL)</li>' +
            '<li>Data Definition Language (DDL)</li>' +
            '<li>Data Manipulation Language (DML)</li>' +
            '<li>Data Transaction Language (DTL)</li>' +
            '<li>Data Control Language (DCL)</li>' +
            '</ul>',
            // Paragraph 10
            '<i>DQL</i> is used for data retrieval used for display in application or in a database client. <i>DDL</i> is used to define the database and is used to implement database objects such as tables, columns, relationships and constraints. <i>DML</i> is used to create data initiated by business transactions as well as updating or deleting data, <i>DML</i> is also used to alter database objects such modifying tables or columns. <i>DTL</i> is used to control the way the database processes transactions and <i>DCL</i> is mostly related to users and access rights.',
            // Paragraph 11
            'SQL can also be described as a <a id="decLang">declarative language</a> (<a id="fourGl">4GL</a>) language and includes some elements of a <a id="procLang">procedural language</a>.',
        ],
        links: {
            dsfl: 'https://en.wikipedia.org/wiki/Domain-specific_language',
            relAlg: 'https://en.wikipedia.org/wiki/Relational_algebra',
            tupCalc: 'https://en.wikipedia.org/wiki/Tuple_relational_calculus',
            rdbms: 'https://en.wikipedia.org/wiki/Relational_database_management_system',
            oltp: 'https://en.wikipedia.org/wiki/Online_transaction_processing',
            olap: 'https://en.wikipedia.org/wiki/Online_analytical_processing',
            decLang: 'https://en.wikipedia.org/wiki/Declarative_programming',
            procLang: 'https://en.wikipedia.org/wiki/Procedural_programming',
            fourGl: 'https://www.techopedia.com/definition/24308/fourth-generation-programming-language-4gl'
        }
    },
    /**
    * 2. About this document
    */
    About_this_document: {
        textArr: [
            'As mentioned in the introduction section; there are many brands of relational database, enterprise and open source. However; as per the document title this document will cover the basics of <a id="t-sql”>Transact Structured Query Language or T-SQL</a>.',

            `<div class="paper question"><b>What is T-SQL</b>${questionSvg}</div>`,

            `T-SQL is Microsoft's implementation of SQL in their proprietary brand of RDBMS called <a id="”>Microsoft SQL Server</a>.`,

            `<div class="paper question"><b>Microsoft SQL Server is a enterprise RDBMS. Is that not overkill for this</b>${questionSvg}</div>`,

            'Indeed way overkill, Microsoft have a scaled down version of the mighty enterprise version specifically for learning T-SQL in a Microsoft environment called Microsoft SQL Server Express, MS SQL Express.',

            'This version may also be used for to implement application that does not require enterprise scaling. The next section <a href="#Getting_started">Getting Started</a> will point you to the resources you need to acquire the software as well as instructions on installation thereof.',

            `<div class="paper question"><b>What are "The Basics"</b>${questionSvg}<div>`,

            'The great thing about SQL is that knowing the basics can go a long way.',

            'For instance, say you are  a data analyst that uses excel to analyse and maintain data. Excel is a great tool and works very well for creating reports, but although it can in theory handle 1 million plus a bit records. Anything above 200 000 and it will just be a frustration to use.',

            'The content of this document will place you in a position to administer data using the power of Microsofts Powerful Database engine without having to acquire an expensive more efficient alternative to Excel.',

            `<div class="paper question"><b>What is covered in this document</b>${questionSvg}</div>`,

            'Even though the basics can take you a long way, the road to learning advanced SQL is even longer as it covers multiple disciplines like distributed database administration, database design and implementation, database security etc.',

            'If you are a software developer, solutions architect or database administrator and you already know some SQL; this document is unfortunately not appropriate for you. Feel free to go to the <a href="#Advanced_topics">Advanced topics</a> section of this page which might guide you toward the appropriate material.',

            'If you are brand new to RDBMS and you wish to get certified, there is a link to the Microsoft Virtual Academy in the <a href="#Additional_resources">Additional resources</a> section of this document.',

            'Here is a list of a few general features that this document will not cover:',

            '<ul>' +
            '<li>Merge</li>' +
            '<li>Unions</li>' +
            '<li>Cursors</li>' +
            '<li>Triggers</li>' +
            '<li>Declaring and using variables</li>' +
            '<li>Stored procedures</li>' +
            '<li>Common table expressions</li>' +
            '<li>Conditional operations (IF, CASE)</li>' +
            '<li>Loops in T-SQL</li>' +
            '<li>Data control language</li>' +
            '</ul>'
        ],
        links: {

        }
    },
    /**
     * 3. Getting_started
     */
    Getting_started: {
        textArr: [
            'The previous sections of this document was just to give you some history of RDBMS, different types of RDBMS and why they are important. There was then just some items to note about this document, but now we will actually start doing something.',

            '<div class="paper objective"><b>By the end of this section you need to:</b>' +
            '<ul>' +
            '<li><i>Have SQL Server express running.<i></li>' +
            '<li><i>Be able to access SQL Server express via Microsoft SQL Server Management Studio.<i></li>' +
            '</ul>' +
            '</div>',

            '<div class="paper note"> <p><b class="note-start">NOTE:</b>if you already have SQL Server running and can access it with SQL Server Management Studio, you may skip to <a href="#Creating_the_demo_database">Creating the demo database</a> that create the demo database and proceed to.</p></div>',

            'So let’s start doing this, head over to Microsoft’s site and <a id="dnldsqlexp">download MS SQL Express</a>.',

            'While you are waiting for the download, you can head over to this <a id="instsqlexp">GoDaddy article</a> and start familiarising yourself with the steps to follow for installing MS SQL Express.',

            'MS SQL Express should also install <a id="mssqlinfo">Microsoft SQL Server Management Studio</a>, which is recommended application to use when interacting directly with your SQL server and is also referred to as the <a id="dbclient">Database Client</a>.',

            'This is because all RDBMS is built on <a id="clntsrv">client-server architecture</a>. This is also the architecture of most corporate applications where many users use the same application for productivity. It is also the definitive architecture of <a id="website">web sites</a> and <a id="webapp">web applications</a>.',

            'Almost all RDMS packages that install a database server will also install a database client application to interact with the database server.',

            'Some database client applications are even build for interacting with multiple brands of RDBMS, for instance a single database client can connect to a PosgreSQL server as well as a MySQL server. An example of this is <a id="teamsql">TeamSQL</a>.',

            'But for this document we will only use Microsoft SQL Server Management Studio and will be referred to as SSMS in the rest of this document.',

            'Make sure that by the end of this step you have a running instance of Microsoft SQL Server Express and you are able to access this by means of SSMS, otherwise you will not be able to proceed.',

            'If you need to <a id="readsearchask">Read, Search, Ask</a>.',
        ],
        links: {
            dnldsqlexp: 'https://www.microsoft.com/en-us/sql-server/sql-server-editions-express',
            instsqlexp: 'https://za.godaddy.com/help/install-microsoft-sql-server-express-16624',
            dbclient: 'https://en.wikipedia.org/wiki/Database_connection',
            clntsrv: 'https://en.wikipedia.org/wiki/Client%E2%80%93server_model',
            website: 'https://en.wikipedia.org/wiki/Website',
            webapp: 'https://en.wikipedia.org/wiki/Web_application',
            readsearchask: 'https://medium.freecodecamp.org/read-search-dont-be-afraid-to-ask-743a23c411b4',
            mssqlinfo: 'https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms?view=sql-server-2017',
            teamsql: 'https://teamsql.io'
        }
    },
    Creating_the_demo_database: {
        textArr: [
            `In this section define the steps to create a demo database named <b>Northwind</b>. Having this database created on your on computer, will allow you to practically complete the examples used in this document to demonstrate the Structured Query language functionality inside Microsoft SQL Server Management Studio or SSMS.`,

            `<div class="paper note"> <p><b class="note-start">NOTE:</b> If you at this point do cannot access your own instance of Microsoft SQL Server Express through Microsoft SQL Server Management Studio please go back to <a href="#Getting_started">Getting started</a></p></div>.`,

            `<div class="paper objective"><b>By the end of this section you need to:</b>` +
            `<ul>` +
            `<li><i>Have created a database in Microsoft SQL Server Management Studio (SSMS) named Northwind from the SQL Snippet provided in this section.<i></li>` +
            `</ul>` +
            `</div>`,

            `The snippet below contains some the SQL you will be learning while working your way through this document. You are welcome to look at the code provided in the snippet but it is not important for you to know what the code in the snippet is doing.`,

            `All you need to do for this section is run the snippet to create the data required as described in first paragraph of this section.`,

            `<h3 class="step-heading sh-cddb">Step 1:</h3>`,

            `Open SSMS, logon to your instance of the SQL Server. If you have done this you should see the following:<br>` +

            `<img class="demo-database-step-1" src="./ssms.png"><br>` +

            `This part of SSMS is called the <a id="objexp">Object Explorer</a> and allows you to explore all the objects created in your SQL Server but more on this in the next section <a href="#RDBMS_Concepts_&_Semantics">RDBMS Concepts Semantics</a>.`,

            `<div class="paper note"> <p><b class="note-start">NOTE:</b> This document is using version 17.3 of Microsoft SQL Server Management Studio, your version might be slightly different but the functionality remains the same. </p></div>`,

            `<h3 class="step-heading sh-cddb">Step 2:</h3>`,

            `Click on <i>File>New>Query with Current Connection</i>. You can also look for a button on the toolbar that reads "New Query". You can also simply use the shortcut keys <b>ctrl+n</b>.`,

            `<h3 class="step-heading sh-cddb">Step 3:</h3>`,

            `Click on the copy to clipboard button at the bottom of the snippet below.`,

            `<div id="demo-database-snippet" class="paper demo-database-snippet"></div>`,

            `<h3 class="step-heading sh-cddb">Step 4:</h3>`,

            `Go to SSMS click inside the query window then right click (or left click depending on your mouse config) and then click on paste. Instead of right clicking you can also use the shortcut key for paste which is <b>ctrl+v</b>.`,

            `<h3 class="step-heading sh-cddb">Step 5:</h3>`,

            `Once the SQL snippet has been pasted inside the query window, look at the menu bar for an option named query, clicking on this will display a menu, look for the option named <b>Execute</b> and click on it.`,

            `If you want to skip this procedure you may also use the <b>F5</b> key which is the shortcut for run.`,

            `If you encounter an error, read what the error says. Use <a id="readsearchask_1">Read, Search, Ask</a> to attempt to resolve this error.`,

            `If there is no error, a message will appear in the bottom of the query window stating the snippet executed successfully.`,

            `<h3 class="step-heading sh-cddb">Step 6:</h3>`,

            `Look in the object explorer for a folder named <b>Databases</b>, expanding this folder will reveal an item named <b>Northwind</b>.`,

            `This means that you have now successfully created the demo database and can now move on to the next section.`
        ],
        links: {
            objexp: 'https://docs.microsoft.com/en-us/sql/ssms/object/object-explorer?view=sql-server-2017',
            readsearchask_1: 'https://medium.freecodecamp.org/read-search-dont-be-afraid-to-ask-743a23c411b4',
        }
    },
    RDBMS_Concepts_and_Semantics: {
        textArr: [
            `<div id="tableRDMSConceptsSemantics"></div>`
        ],
        links: {}
    }
    /*
    page_section_id: {
        textArr: [],
        links: {}
    }
    */
}