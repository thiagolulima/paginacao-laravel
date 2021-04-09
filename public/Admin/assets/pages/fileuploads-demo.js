/*
 Template Name: Scoxe - Admin & Dashboard Template
 Author: Myra Studio
 File: File Uploads
*/


$('.dropify').dropify({
    messages: {
        'default': 'Arraste e solte um arquivo aqui ou clique',
        'replace': 'Arraste e solte ou clique para substituir',
        'remove': 'Remover',
        'error': 'Opa, algo errado foi acrescentado.'
    },
    error: {
        'fileSize': 'O tamanho do arquivo é muito grande (20M max).'
    }
});


function recarregaDropify()
{
    $('.dropify').dropify({
        messages: {
            'default': 'Arraste e solte um arquivo aqui ou clique',
            'replace': 'Arraste e solte ou clique para substituir',
            'remove': 'Remover',
            'error': 'Opa, algo errado foi acrescentado.'
        },
        error: {
            'fileSize': 'O tamanho do arquivo é muito grande (20M max).'
        }
    });
}

