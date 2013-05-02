
SRCS=$(wildcard *.md)
OBJS=$(SRCS:.md=.html)

all: html $(addprefix html/, $(OBJS))

html:
	@mkdir html

html/%.html: %.md .template.html
	@echo "Compiling $(basename $<)"
	@cat .template.html | sed "s|@TITLE@|$(basename $<)|" > $@
	@cat $< | marked >> $@
	@echo "</div>" >> $@
	@echo "</body>" >> $@
	@echo "</html>" >> $@

assets: assets/bootstrap.css assets/cref.js assets/docs.css assets/jquery.min.js

tar: doc.tar.gz

doc.tar.gz: all assets *.nb graph
	@echo "Archive..."
	@tar -czvf doc.tar.gz html/* assets/* *.md

clean:
	rm -rf html doc.tar.gz

.PHONY: all

