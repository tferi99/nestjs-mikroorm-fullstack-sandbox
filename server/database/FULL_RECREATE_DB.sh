. .config

cp ../.env $ORM_DIST

dropDb -U postgres ${DB}

createDb -U postgres ${DB}
if [ $? -ne 0 ]
then
	echo 'Database cannot be created.' 1>&2
	exit
fi

cd $ORM_DIST
#node db-schema-create.js
node main.js createdbschema
