USE [master]
GO
/****** Object:  Database [sessions]    Script Date: 30.10.2016 0:54:55 ******/
CREATE DATABASE [sessions]

ALTER DATABASE [sessions] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [sessions].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [sessions] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [sessions] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [sessions] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [sessions] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [sessions] SET ARITHABORT OFF 
GO
ALTER DATABASE [sessions] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [sessions] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [sessions] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [sessions] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [sessions] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [sessions] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [sessions] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [sessions] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [sessions] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [sessions] SET  DISABLE_BROKER 
GO
ALTER DATABASE [sessions] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [sessions] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [sessions] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [sessions] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [sessions] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [sessions] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [sessions] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [sessions] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [sessions] SET  MULTI_USER 
GO
ALTER DATABASE [sessions] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [sessions] SET DB_CHAINING OFF 
GO
ALTER DATABASE [sessions] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [sessions] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO

USE [sessions]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sessions](
	[sid] [varchar](255) NOT NULL,
	[session] [varchar](max) NOT NULL,
	[expires] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[sid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
USE [master]
GO
ALTER DATABASE [sessions] SET  READ_WRITE 
GO
