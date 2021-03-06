// Copyright (c) JBaron.  All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

module Cats.Util {


    /**
     * Some help to find based on the file name extension either the computer language (for the editor) 
     * or the mimetype (for the icons in the file navigator)
     */
    export class MimeTypeFinder {

        /**      
         * Find the mimetype for a file name      
         */
        static lookup(filename, fallback?) {
            return this.types[PATH.extname(filename)] || fallback || this.default_type;
        }

        private static default_type = 'application/octet-stream';

       

        static types = {
            ".3gp": "video/3gpp",
            ".a": "application/octet-stream",
            ".ai": "application/postscript",
            ".aif": "audio/x-aiff",
            ".aiff": "audio/x-aiff",
            ".arj": "application/x-arj-compressed",
            ".asc": "application/pgp-signature",
            ".asf": "video/x-ms-asf",
            ".asm": "text/x-asm",
            ".asx": "video/x-ms-asf",
            ".atom": "application/atom+xml",
            ".au": "audio/basic",
            ".avi": "video/x-msvideo",
            ".bat": "application/x-msdownload",
            ".bcpio": "application/x-bcpio",
            ".bin": "application/octet-stream",
            ".bmp": "image/bmp",
            ".bz2": "application/x-bzip2",
            ".c": "text/x-c",
            ".cab": "application/vnd.ms-cab-compressed",
            ".cc": "text/x-c",
            ".ccad": "application/clariscad",
            ".chm": "application/vnd.ms-htmlhelp",
            ".class": "application/octet-stream",
            ".cod": "application/vnd.rim.cod",
            ".com": "application/x-msdownload",
            ".conf": "text/plain",
            ".cpio": "application/x-cpio",
            ".cpp": "text/x-c",
            ".cpt": "application/mac-compactpro",
            ".crt": "application/x-x509-ca-cert",
            ".csh": "application/x-csh",
            ".css": "text/css",
            ".csv": "text/csv",
            ".cxx": "text/x-c",
            ".dart": "application/dart",
            ".deb": "application/x-debian-package",
            ".der": "application/x-x509-ca-cert",
            ".diff": "text/x-diff",
            ".djv": "image/vnd.djvu",
            ".djvu": "image/vnd.djvu",
            ".dl": "video/dl",
            ".dll": "application/x-msdownload",
            ".dmg": "application/octet-stream",
            ".doc": "application/msword",
            ".dot": "application/msword",
            ".drw": "application/drafting",
            ".dtd": "application/xml-dtd",
            ".dvi": "application/x-dvi",
            ".dwg": "application/acad",
            ".dxf": "application/dxf",
            ".dxr": "application/x-director",
            ".ear": "application/java-archive",
            ".eml": "message/rfc822",
            ".eps": "application/postscript",
            ".etx": "text/x-setext",
            ".exe": "application/x-msdownload",
            ".ez": "application/andrew-inset",
            ".f": "text/x-fortran",
            ".f77": "text/x-fortran",
            ".f90": "text/x-fortran",
            ".fli": "video/x-fli",
            ".flv": "video/x-flv",
            ".for": "text/x-fortran",
            ".gem": "application/octet-stream",
            ".gemspec": "text/x-script.ruby",
            ".gif": "image/gif",
            ".gl": "video/gl",
            ".gtar": "application/x-gtar",
            ".gz": "application/x-gzip",
            ".h": "text/x-c",
            ".hdf": "application/x-hdf",
            ".hh": "text/x-c",
            ".hqx": "application/mac-binhex40",
            ".htm": "text/html",
            ".html": "text/html",
            ".ice": "x-conference/x-cooltalk",
            ".ico": "image/vnd.microsoft.icon",
            ".ics": "text/calendar",
            ".ief": "image/ief",
            ".ifb": "text/calendar",
            ".igs": "model/iges",
            ".ips": "application/x-ipscript",
            ".ipx": "application/x-ipix",
            ".iso": "application/octet-stream",
            ".jad": "text/vnd.sun.j2me.app-descriptor",
            ".jar": "application/java-archive",
            ".java": "text/x-java-source",
            ".jnlp": "application/x-java-jnlp-file",
            ".jpeg": "image/jpeg",
            ".jpg": "image/jpeg",
            ".js": "application/javascript",
            ".json": "application/json",
            ".latex": "application/x-latex",
            ".log": "text/plain",
            ".lsp": "application/x-lisp",
            ".lzh": "application/octet-stream",
            ".m": "text/plain",
            ".m3u": "audio/x-mpegurl",
            ".m4v": "video/mp4",
            ".man": "text/troff",
            ".mathml": "application/mathml+xml",
            ".mbox": "application/mbox",
            ".mdoc": "text/troff",
            ".me": "text/troff",
            ".mid": "audio/midi",
            ".midi": "audio/midi",
            ".mif": "application/x-mif",
            ".mime": "www/mime",
            ".mml": "application/mathml+xml",
            ".mng": "video/x-mng",
            ".mov": "video/quicktime",
            ".movie": "video/x-sgi-movie",
            ".mp3": "audio/mpeg",
            ".mp4": "video/mp4",
            ".mp4v": "video/mp4",
            ".mpeg": "video/mpeg",
            ".mpg": "video/mpeg",
            ".mpga": "audio/mpeg",
            ".ms": "text/troff",
            ".msi": "application/x-msdownload",
            ".nc": "application/x-netcdf",
            ".oda": "application/oda",
            ".odp": "application/vnd.oasis.opendocument.presentation",
            ".ods": "application/vnd.oasis.opendocument.spreadsheet",
            ".odt": "application/vnd.oasis.opendocument.text",
            ".ogg": "application/ogg",
            ".ogm": "application/ogg",
            ".p": "text/x-pascal",
            ".pas": "text/x-pascal",
            ".pbm": "image/x-portable-bitmap",
            ".pdf": "application/pdf",
            ".pem": "application/x-x509-ca-cert",
            ".pgm": "image/x-portable-graymap",
            ".pgn": "application/x-chess-pgn",
            ".pgp": "application/pgp",
            ".pkg": "application/octet-stream",
            ".pl": "text/x-script.perl",
            ".pm": "application/x-perl",
            ".png": "image/png",
            ".pnm": "image/x-portable-anymap",
            ".ppm": "image/x-portable-pixmap",
            ".pps": "application/vnd.ms-powerpoint",
            ".ppt": "application/vnd.ms-powerpoint",
            ".ppz": "application/vnd.ms-powerpoint",
            ".pre": "application/x-freelance",
            ".prt": "application/pro_eng",
            ".ps": "application/postscript",
            ".psd": "image/vnd.adobe.photoshop",
            ".py": "text/x-script.python",
            ".qt": "video/quicktime",
            ".ra": "audio/x-realaudio",
            ".rake": "text/x-script.ruby",
            ".ram": "audio/x-pn-realaudio",
            ".rar": "application/x-rar-compressed",
            ".ras": "image/x-cmu-raster",
            ".rb": "text/x-script.ruby",
            ".rdf": "application/rdf+xml",
            ".rgb": "image/x-rgb",
            ".rm": "audio/x-pn-realaudio",
            ".roff": "text/troff",
            ".rpm": "application/x-redhat-package-manager",
            ".rss": "application/rss+xml",
            ".rtf": "text/rtf",
            ".rtx": "text/richtext",
            ".ru": "text/x-script.ruby",
            ".s": "text/x-asm",
            ".scm": "application/x-lotusscreencam",
            ".set": "application/set",
            ".sgm": "text/sgml",
            ".sgml": "text/sgml",
            ".sh": "application/x-sh",
            ".shar": "application/x-shar",
            ".sig": "application/pgp-signature",
            ".silo": "model/mesh",
            ".sit": "application/x-stuffit",
            ".skt": "application/x-koan",
            ".smil": "application/smil",
            ".snd": "audio/basic",
            ".so": "application/octet-stream",
            ".sol": "application/solids",
            ".spl": "application/x-futuresplash",
            ".src": "application/x-wais-source",
            ".stl": "application/SLA",
            ".stp": "application/STEP",
            ".sv4cpio": "application/x-sv4cpio",
            ".sv4crc": "application/x-sv4crc",
            ".svg": "image/svg+xml",
            ".svgz": "image/svg+xml",
            ".swf": "application/x-shockwave-flash",
            ".t": "text/troff",
            ".tar": "application/x-tar",
            ".tbz": "application/x-bzip-compressed-tar",
            ".tcl": "application/x-tcl",
            ".tex": "application/x-tex",
            ".texi": "application/x-texinfo",
            ".texinfo": "application/x-texinfo",
            ".text": "text/plain",
            ".tgz": "application/x-tar-gz",
            ".tif": "image/tiff",
            ".tiff": "image/tiff",
            ".torrent": "application/x-bittorrent",
            ".tr": "text/troff",
            ".ts": "application/x-typescript",
            ".tsi": "audio/TSP-audio",
            ".tsp": "application/dsptype",
            ".tsv": "text/tab-separated-values",
            ".txt": "text/plain",
            ".unv": "application/i-deas",
            ".ustar": "application/x-ustar",
            ".vcd": "application/x-cdlink",
            ".vcf": "text/x-vcard",
            ".vcs": "text/x-vcalendar",
            ".vda": "application/vda",
            ".vivo": "video/vnd.vivo",
            ".vrm": "x-world/x-vrml",
            ".vrml": "model/vrml",
            ".war": "application/java-archive",
            ".wav": "audio/x-wav",
            ".wax": "audio/x-ms-wax",
            ".wma": "audio/x-ms-wma",
            ".wmv": "video/x-ms-wmv",
            ".wmx": "video/x-ms-wmx",
            ".wrl": "model/vrml",
            ".wsdl": "application/wsdl+xml",
            ".wvx": "video/x-ms-wvx",
            ".xbm": "image/x-xbitmap",
            ".xhtml": "application/xhtml+xml",
            ".xls": "application/vnd.ms-excel",
            ".xlw": "application/vnd.ms-excel",
            ".xml": "application/xml",
            ".xpm": "image/x-xpixmap",
            ".xsl": "application/xml",
            ".xslt": "application/xslt+xml",
            ".xwd": "image/x-xwindowdump",
            ".xyz": "chemical/x-pdb",
            ".yaml": "text/yaml",
            ".yml": "text/yaml",
            ".zip": "application/zip"
        };

      
      
        
    }

}